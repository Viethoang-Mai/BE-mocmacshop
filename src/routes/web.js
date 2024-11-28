const express = require("express");
const routes = express.Router();
const productController = require("../controllers/products.controller");
const categoriesController = require("../controllers/categories.controller");
const userController = require("../controllers/user.controller");

routes.post("/register", userController.register);
routes.get("/categories", categoriesController.index);
routes.get("/products", productController.index);
routes.get("/products/filter", productController.filter);
routes.get("/products/:id", productController.detail);

module.exports = routes;
