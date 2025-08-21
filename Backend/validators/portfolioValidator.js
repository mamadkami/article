const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().required().max(100),
});

const portfolioItemSchema = Joi.object({
  title: Joi.string().required().max(100),
  category: Joi.string().required().max(100),
  image: Joi.string().uri().required(),
  likes: Joi.number().integer().min(0).default(0),
  views: Joi.number().integer().min(0).default(0),
  description: Joi.string().allow('').max(500),
  tags: Joi.array().items(Joi.string()).required(),
});

const serviceSchema = Joi.object({
  title: Joi.string().required().max(100),
  description: Joi.string().allow('').max(500),
  features: Joi.array().items(Joi.string()).required(),
});

const statSchema = Joi.object({
  number: Joi.string().required().max(50),
  label: Joi.string().required().max(100),
});

module.exports = {
  validateCategory: (data) => categorySchema.validate(data),
  validatePortfolioItem: (data) => portfolioItemSchema.validate(data),
  validateService: (data) => serviceSchema.validate(data),
  validateStat: (data) => statSchema.validate(data),
};