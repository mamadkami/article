const pool = require('../config/db');

exports.getPortfolioItemsByCategory = async (category) => {
  try {
    const result = await pool.query('SELECT * FROM portfolio_items WHERE category = $1', [category]);
    return result.rows;
  } catch (err) {
    throw new Error('خطا در دریافت آیتم‌های پورتفولیو');
  }
};