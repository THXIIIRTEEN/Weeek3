// Файл middlewares/users.js

// Импортируем модель
const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
    // По GET-запросу на эндпоинт /users найдём все документы пользователей
  req.categoriesArray = await categories.find({});
  next();
}

// Экспортируем функцию поиска всех пользователей
module.exports = findAllCategories;