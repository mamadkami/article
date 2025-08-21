const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');
const { validateCategory, validatePortfolioItem, validateService, validateStat } = require('../validators/portfolioValidator');

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: مدیریت دسته‌بندی‌ها
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: دریافت همه دسته‌بندی‌ها
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: لیست دسته‌بندی‌ها
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *       500:
 *         description: خطا در سرور
 */
router.get('/categories', portfolioController.getAllCategories);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: ایجاد دسته‌بندی جدید
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "دسته‌بندی جدید"
 *     responses:
 *       201:
 *         description: دسته‌بندی ایجاد شد
 *       400:
 *         description: خطای اعتبارسنجی
 *       500:
 *         description: خطا در سرور
 */
router.post('/categories', portfolioController.createCategory);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: به‌روزرسانی دسته‌بندی
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "دسته‌بندی به‌روزرسانی‌شده"
 *     responses:
 *       200:
 *         description: دسته‌بندی به‌روزرسانی شد
 *       400:
 *         description: خطای اعتبارسنجی
 *       404:
 *         description: دسته‌بندی یافت نشد
 *       500:
 *         description: خطا در سرور
 */
router.put('/categories/:id', portfolioController.updateCategory);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: حذف دسته‌بندی
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: دسته‌بندی حذف شد
 *       404:
 *         description: دسته‌بندی یافت نشد
 *       500:
 *         description: خطا در سرور
 */
router.delete('/categories/:id', portfolioController.deleteCategory);

/**
 * @swagger
 * tags:
 *   name: Portfolio Items
 *   description: مدیریت آیتم‌های پورتفولیو
 */

/**
 * @swagger
 * /portfolio_items:
 *   get:
 *     summary: دریافت همه آیتم‌های پورتفولیو
 *     tags: [Portfolio Items]
 *     responses:
 *       200:
 *         description: لیست آیتم‌های پورتفولیو
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   category:
 *                     type: string
 *                   image:
 *                     type: string
 *                   likes:
 *                     type: integer
 *                   views:
 *                     type: integer
 *                   description:
 *                     type: string
 *                   tags:
 *                     type: array
 *                     items:
 *                       type: string
 *       500:
 *         description: خطا در سرور
 */
router.get('/portfolio_items', portfolioController.getAllPortfolioItems);

/**
 * @swagger
 * /portfolio_items:
 *   post:
 *     summary: ایجاد آیتم پورتفولیو جدید
 *     tags: [Portfolio Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "آیتم جدید"
 *               category:
 *                 type: string
 *                 example: "عکاسی طبیعت"
 *               image:
 *                 type: string
 *                 example: "https://example.com/image.jpg"
 *               likes:
 *                 type: integer
 *                 example: 0
 *               views:
 *                 type: integer
 *                 example: 0
 *               description:
 *                 type: string
 *                 example: "توضیحات آیتم"
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["تگ1", "تگ2"]
 *     responses:
 *       201:
 *         description: آیتم پورتفولیو ایجاد شد
 *       400:
 *         description: خطای اعتبارسنجی
 *       500:
 *         description: خطا در سرور
 */
router.post('/portfolio_items', portfolioController.createPortfolioItem);

/**
 * @swagger
 * /portfolio_items/{id}:
 *   put:
 *     summary: به‌روزرسانی آیتم پورتفولیو
 *     tags: [Portfolio Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               category:
 *                 type: string
 *               image:
 *                 type: string
 *               likes:
 *                 type: integer
 *               views:
 *                 type: integer
 *               description:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: آیتم پورتفولیو به‌روزرسانی شد
 *       400:
 *         description: خطای اعتبارسنجی
 *       404:
 *         description: آیتم پورتفولیو یافت نشد
 *       500:
 *         description: خطا در سرور
 */
router.put('/portfolio_items/:id', portfolioController.updatePortfolioItem);

/**
 * @swagger
 * /portfolio_items/{id}:
 *   delete:
 *     summary: حذف آیتم پورتفولیو
 *     tags: [Portfolio Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: آیتم پورتفولیو حذف شد
 *       404:
 *         description: آیتم پورتفولیو یافت نشد
 *       500:
 *         description: خطا در سرور
 */
router.delete('/portfolio_items/:id', portfolioController.deletePortfolioItem);

/**
 * @swagger
 * tags:
 *   name: Services
 *   description: مدیریت سرویس‌ها
 */

/**
 * @swagger
 * /services:
 *   get:
 *     summary: دریافت همه سرویس‌ها
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: لیست سرویس‌ها
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   features:
 *                     type: array
 *                     items:
 *                       type: string
 *                   icon:
 *                     type: string
 *       500:
 *         description: خطا در سرور
 */
router.get('/services', portfolioController.getAllServices);

/**
 * @swagger
 * /services:
 *   post:
 *     summary: ایجاد سرویس جدید
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "سرویس جدید"
 *               description:
 *                 type: string
 *                 example: "توضیحات سرویس"
 *               features:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["ویژگی1", "ویژگی2"]
 *               icon:
 *                 type: string
 *                 example: "https://example.com/icon.png"
 *     responses:
 *       201:
 *         description: سرویس ایجاد شد
 *       400:
 *         description: خطای اعتبارسنجی
 *       500:
 *         description: خطا در سرور
 */
router.post('/services', portfolioController.createService);

/**
 * @swagger
 * /services/{id}:
 *   put:
 *     summary: به‌روزرسانی سرویس
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               features:
 *                 type: array
 *                 items:
 *                   type: string
 *               icon:
 *                 type: string
 *     responses:
 *       200:
 *         description: سرویس به‌روزرسانی شد
 *       400:
 *         description: خطای اعتبارسنجی
 *       404:
 *         description: سرویس یافت نشد
 *       500:
 *         description: خطا در سرور
 */
router.put('/services/:id', portfolioController.updateService);

/**
 * @swagger
 * /services/{id}:
 *   delete:
 *     summary: حذف سرویس
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: سرویس حذف شد
 *       404:
 *         description: سرویس یافت نشد
 *       500:
 *         description: خطا در سرور
 */
router.delete('/services/:id', portfolioController.deleteService);

/**
 * @swagger
 * tags:
 *   name: Stats
 *   description: مدیریت آمارها
 */

/**
 * @swagger
 * /stats:
 *   get:
 *     summary: دریافت همه آمارها
 *     tags: [Stats]
 *     responses:
 *       200:
 *         description: لیست آمارها
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   number:
 *                     type: string
 *                   label:
 *                     type: string
 *       500:
 *         description: خطا در سرور
 */
router.get('/stats', portfolioController.getAllStats);

/**
 * @swagger
 * /stats:
 *   post:
 *     summary: ایجاد آمار جدید
 *     tags: [Stats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               number:
 *                 type: string
 *                 example: "100+"
 *               label:
 *                 type: string
 *                 example: "پروژه جدید"
 *     responses:
 *       201:
 *         description: آمار ایجاد شد
 *       400:
 *         description: خطای اعتبارسنجی
 *       500:
 *         description: خطا در سرور
 */
router.post('/stats', portfolioController.createStat);

/**
 * @swagger
 * /stats/{id}:
 *   put:
 *     summary: به‌روزرسانی آمار
 *     tags: [Stats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               number:
 *                 type: string
 *               label:
 *                 type: string
 *     responses:
 *       200:
 *         description: آمار به‌روزرسانی شد
 *       400:
 *         description: خطای اعتبارسنجی
 *       404:
 *         description: آمار یافت نشد
 *       500:
 *         description: خطا در سرور
 */
router.put('/stats/:id', portfolioController.updateStat);

/**
 * @swagger
 * /stats/{id}:
 *   delete:
 *     summary: حذف آمار
 *     tags: [Stats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: آمار حذف شد
 *       404:
 *         description: آمار یافت نشد
 *       500:
 *         description: خطا در سرور
 */
router.delete('/stats/:id', portfolioController.deleteStat);

module.exports = router;