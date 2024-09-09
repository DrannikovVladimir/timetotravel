const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const robots = require('express-robots-txt');
const cors = require('cors');
const routes = require('./routes');
const { PORT } = require('./config');

/**
 * Создает и настраивает экземпляр Express-приложения
 * @returns {express.Application} Настроенное Express-приложение
 */
function createApp() {
  const app = express();

  // Путь к клиентским файлам (предполагается, что клиентский проект находится на уровень выше)
  const clientPath = path.join(__dirname, '..client/src');

  // Настройка middleware
  app.use(express.static(clientPath)); // Обслуживание клиентских файлов
  app.use(express.static(path.resolve(__dirname, 'static'))); // Обслуживание статических файлов сервера
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());

  // Настройка robots.txt
  app.use(robots({
    UserAgent: '*',
    Sitemap: 'https://tmtl.kz/css/sitemap.xml',
    Host: 'https://tmtl.kz',
    CrawlDelay: '5',
    CleanParam: 'utm_source&utm_medium&utm_campaign&sessionid',
  }));

  // Подключение маршрутов API
  app.use('/api', routes);

  // Маршрут для всех остальных запросов (SPA fallback)
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
  });

  return app;
}

// Создание и запуск сервера
const app = createApp();

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});