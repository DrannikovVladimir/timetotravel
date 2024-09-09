const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    main: './client/src/scss/style.scss',
    // Здесь можно добавить дополнительные entry points при необходимости
  },
  output: {
    path: path.resolve(__dirname, 'server/static'),
    filename: 'js/[name].js',
    assetModuleFilename: 'img/[name][ext]',
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    ...(isProd ? [new CleanWebpackPlugin()] : []),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    // Обработка React компонентов
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'client/src/js/components'),
          to: path.resolve(__dirname, 'client/src/assets/components'),
          transform: (content, path) => {
            return require('@babel/core').transform(content, {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }).code;
          },
        },
      ],
    }),
    // Копирование остальных файлов
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'client/src/img'),
          to: path.resolve(__dirname, 'server/static/img'),
        },
        {
          from: path.resolve(__dirname, 'client/src/index.html'),
          to: path.resolve(__dirname, 'server/static/index.html'),
        },
        {
          from: path.resolve(__dirname, 'client/src/articles'),
          to: path.resolve(__dirname, 'server/static/articles'),
        },
        {
          from: path.resolve(__dirname, 'client/src/country'),
          to: path.resolve(__dirname, 'server/static/country'),
        },
        {
          from: path.resolve(__dirname, 'client/src/hottours'),
          to: path.resolve(__dirname, 'server/static/hottours'),
        },
        {
          from: path.resolve(__dirname, 'client/src/info'),
          to: path.resolve(__dirname, 'server/static/info'),
        },
        {
          from: path.resolve(__dirname, 'client/src/tours'),
          to: path.resolve(__dirname, 'server/static/tours'),
        },
        {
          from: path.resolve(__dirname, 'client/src/js'),
          to: path.resolve(__dirname, 'server/static/js'),
          globOptions: {
            ignore: ['**/components/**'], // Игнорируем папку components
          },
        },
        {
          from: path.resolve(__dirname, 'client/src/assets/components'),
          to: path.resolve(__dirname, 'server/static/assets/components'),
        },
      ],
    }),
    ...(isProd ? [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              ['svgo', {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                        addAttributesToSVGElement: {
                          params: {
                            attributes: [
                              { xmlns: 'http://www.w3.org/2000/svg' },
                            ],
                          },
                        },
                      },
                    },
                  },
                ],
              }],
            ],
          },
        },
      }),
      new ImageminWebpWebpackPlugin({
        config: [{
          test: /\.(jpe?g|png)$/,
          options: {
            quality: 75
          }
        }],
        overrideExtension: true,
        detailedLogs: false,
        silent: false,
        strict: true
      })
    ] : []),
  ],
  optimization: {
    minimizer: isProd ? [
      '...', // Вставьте здесь дополнительные минимизаторы, если они у вас есть
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              ['svgo', {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                        addAttributesToSVGElement: {
                          params: {
                            attributes: [
                              { xmlns: 'http://www.w3.org/2000/svg' },
                            ],
                          },
                        },
                      },
                    },
                  },
                ],
              }],
            ],
          },
        },
      }),
    ] : [],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'server/static'),
    },
    compress: true,
    port: 8080,
    hot: true,
    proxy: [{
      context: ['/api'],
      target: 'http://localhost:3000',
    }]
  },
};