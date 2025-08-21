const pool = require('../config/db');
const { validateCategory, validatePortfolioItem, validateService, validateStat } = require('../validators/portfolioValidator');
const Category = require('../models/category.model');

// دسته‌بندی‌ها
exports.getAllCategories = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در دریافت داده‌ها');
  }
};

exports.createCategory = async (req, res) => {
  const { error } = validateCategory(req.body);
  if (error) return res.status(400).send(`❌ خطای اعتبارسنجی: ${error.details[0].message}`);

  try {
    const { name } = req.body;
    const category = await Category.create(name);
    res.status(201).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در ایجاد دسته‌بندی');
  }
};

exports.updateCategory = async (req, res) => {
  const { error } = validateCategory(req.body);
  if (error) return res.status(400).send(`❌ خطای اعتبارسنجی: ${error.details[0].message}`);
  
  try {
    const { id } = req.params;
    const { name } = req.body;
    const result = await pool.query('UPDATE categories SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
    if (result.rowCount === 0) return res.status(404).send('❌ دسته‌بندی یافت نشد');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در به‌روزرسانی دسته‌بندی');
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM categories WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) return res.status(404).send('❌ دسته‌بندی یافت نشد');
    res.json({ message: '✅ دسته‌بندی با موفقیت حذف شد' });
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در حذف دسته‌بندی');
  }
};

// آیتم‌های پورتفولیو
exports.getAllPortfolioItems = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM portfolio_items');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در دریافت داده‌ها');
  }
};

exports.createPortfolioItem = async (req, res) => {
  const { error } = validatePortfolioItem(req.body);
  if (error) return res.status(400).send(`❌ خطای اعتبارسنجی: ${error.details[0].message}`);
  
  try {
    const { title, category, image, likes, views, description, tags } = req.body;
    const result = await pool.query(
      'INSERT INTO portfolio_items (title, category, image, likes, views, description, tags) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [title, category, image, likes, views, description, JSON.stringify(tags)]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در ایجاد آیتم پورتفولیو');
  }
};

exports.updatePortfolioItem = async (req, res) => {
  const { error } = validatePortfolioItem(req.body);
  if (error) return res.status(400).send(`❌ خطای اعتبارسنجی: ${error.details[0].message}`);
  
  try {
    const { id } = req.params;
    const { title, category, image, likes, views, description, tags } = req.body;
    const result = await pool.query(
      'UPDATE portfolio_items SET title = $1, category = $2, image = $3, likes = $4, views = $5, description = $6, tags = $7 WHERE id = $8 RETURNING *',
      [title, category, image, likes, views, description, JSON.stringify(tags), id]
    );
    if (result.rowCount === 0) return res.status(404).send('❌ آیتم پورتفولیو یافت نشد');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در به‌روزرسانی آیتم پورتفولیو');
  }
};

exports.deletePortfolioItem = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM portfolio_items WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) return res.status(404).send('❌ آیتم پورتفولیو یافت نشد');
    res.json({ message: '✅ آیتم پورتفولیو با موفقیت حذف شد' });
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در حذف آیتم پورتفولیو');
  }
};

// سرویس‌ها
exports.getAllServices = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM services');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در دریافت داده‌ها');
  }
};

exports.createService = async (req, res) => {
  const { error } = validateService(req.body);
  if (error) return res.status(400).send(`❌ خطای اعتبارسنجی: ${error.details[0].message}`);
  
  try {
    const { title, description, features, icon } = req.body;
    const result = await pool.query(
      'INSERT INTO services (title, description, features, icon) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, JSON.stringify(features), icon]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در ایجاد سرویس');
  }
};

exports.updateService = async (req, res) => {
  const { error } = validateService(req.body);
  if (error) return res.status(400).send(`❌ خطای اعتبارسنجی: ${error.details[0].message}`);
  
  try {
    const { id } = req.params;
    const { title, description, features, icon } = req.body;
    const result = await pool.query(
      'UPDATE services SET title = $1, description = $2, features = $3, icon = $4 WHERE id = $5 RETURNING *',
      [title, description, JSON.stringify(features), icon, id]
    );
    if (result.rowCount === 0) return res.status(404).send('❌ سرویس یافت نشد');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در به‌روزرسانی سرویس');
  }
};

exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM services WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) return res.status(404).send('❌ سرویس یافت نشد');
    res.json({ message: '✅ سرویس با موفقیت حذف شد' });
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در حذف سرویس');
  }
};


// آمارها
exports.getAllStats = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM stats');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در دریافت داده‌ها');
  }
};

exports.createStat = async (req, res) => {
  const { error } = validateStat(req.body);
  if (error) return res.status(400).send(`❌ خطای اعتبارسنجی: ${error.details[0].message}`);
  
  try {
    const { number, label } = req.body;
    const result = await pool.query(
      'INSERT INTO stats (number, label) VALUES ($1, $2) RETURNING *',
      [number, label]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در ایجاد آمار');
  }
};

exports.updateStat = async (req, res) => {
  const { error } = validateStat(req.body);
  if (error) return res.status(400).send(`❌ خطای اعتبارسنجی: ${error.details[0].message}`);
  
  try {
    const { id } = req.params;
    const { number, label } = req.body;
    const result = await pool.query(
      'UPDATE stats SET number = $1, label = $2 WHERE id = $3 RETURNING *',
      [number, label, id]
    );
    if (result.rowCount === 0) return res.status(404).send('❌ آمار یافت نشد');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در به‌روزرسانی آمار');
  }
};

exports.deleteStat = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM stats WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) return res.status(404).send('❌ آمار یافت نشد');
    res.json({ message: '✅ آمار با موفقیت حذف شد' });
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ خطا در حذف آمار');
  }
};