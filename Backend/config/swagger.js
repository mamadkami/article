const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Portfolio API',
      version: '1.0.0',
      description: 'API برای مدیریت دسته‌بندی‌ها، آیتم‌های پورتفولیو، سرویس‌ها و آمارها',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'سرور توسعه',
      },
    ],
  },
  apis: ['./routes/portfolio.js'], // مسیر دقیق فایل
};

const specs = swaggerJsdoc(options);

module.exports = specs;