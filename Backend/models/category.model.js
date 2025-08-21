// models/category.model.js
const pool = require('../config/db'); // فرض اینکه pool اینجا ساخته شده

const Category = {
  create: async (name) => {
    const result = await pool.query(
      'INSERT INTO categories (name) VALUES ($1) RETURNING *',
      [name]
    );
    return result.rows[0];
  },

  getAll: async () => {
    const result = await pool.query('SELECT * FROM categories ORDER BY id');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM categories WHERE id = $1', [id]);
    return result.rows[0];
  }
};

module.exports = Category;
