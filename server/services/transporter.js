const nodemailer = require('nodemailer');
const { API_EMAIL, API_PASS, API_HOST  } = require('../config');

const createTransporter = () => {
  if (!API_EMAIL || !API_PASS || !API_HOST) {
    throw new Error('Отсутствуют необходимые переменные окружения');
  }

  return nodemailer.createTransport({
    host: API_HOST,
    port: 465,
    secure: true,
    auth: {
      user: API_EMAIL,
      pass: API_PASS,
    },
  });
};

module.exports = createTransporter;