require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// تست اتصال در هنگام اجرای پروژه
pool.connect()
  .then(() => console.log("✅ اتصال به PostgreSQL برقرار شد"))
  .catch(err => console.error("❌ خطا در اتصال به PostgreSQL:", err));

module.exports = pool;
