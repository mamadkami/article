const express = require('express');
const cors = require('cors');
const portfolioRoutes = require('./routes/portfolio');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');

const app = express();
const port = 3000;

app.use(express.json());

// فعال کردن CORS برای همه‌ی درخواست‌ها
app.use(cors());

// یا اگه خواستی فقط برای یک دامین خاص فعال باشه:
// app.use(cors({ origin: 'http://localhost:5173' }))

// مسیرها
app.use('/api', portfolioRoutes);

// مستندات Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// مدیریت خطاها
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: '❌ خطایی در سرور رخ داد' });
});

app.listen(port, () => {
  console.log(`🚀 سرور روی http://localhost:${port} اجرا شد`);
  console.log(`📚 مستندات API در http://localhost:${port}/docs`);
});
