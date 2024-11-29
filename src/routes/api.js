const express = require("express");
const authController = require("../controllers/auth.controller");
const authApiMiddleware = require("../middlewares/authApiMiddleware");
const favoriteController = require("../controllers/favorite.controller");
const userController = require("../controllers/user.controller");
const cartController = require("../controllers/cart.controller");
const orderController = require("../controllers/order.controller");

const routes = express.Router();
routes.post("/auth/login", authController.login);
routes.post("/auth/refresh-token", authController.refreshToken);
routes.post("/auth/google-login", authController.googleLogin);
routes.use(authApiMiddleware);
routes.get("/auth/profile", authController.profile);
routes.post("/auth/logout", authController.logout);
// favorite
routes.post("/auth/add-favorite", favoriteController.addFavorite);
routes.post("/auth/remove-favorite", favoriteController.removeFavorite);
routes.get("/auth/favorites-list", favoriteController.getFavorites);
// user
routes.post("/auth/change-name", userController.changeName);
routes.post("/auth/change-email", userController.changeEmail);
routes.post("/auth/change-password", userController.changePassword);
// cart
routes.post("/auth/add-to-cart", cartController.addToCart);
routes.post("/auth/remove-from-cart", cartController.removeFromCart);
routes.patch("/auth/update-cart", cartController.updateCart);
routes.get("/auth/carts", cartController.getListCart);
routes.delete("/auth/carts/remove-all", cartController.removeAll);
// order
routes.post("/auth/create-order", orderController.createOrder);
routes.get("/auth/orders", orderController.getOrders);
routes.get("/auth/orders/:id", orderController.findAnOrder);

module.exports = routes;
