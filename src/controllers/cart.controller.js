const { Cart } = require("../models/index");
const { successResponse, errorResponse } = require("../utils/response");
const {
    addCart,
    removeCart,
    getListCart,
    updateCart,
} = require("../services/cart.service");
module.exports = {
    addToCart: async (req, res) => {
        try {
            const { id } = req.user;
            const { product_id, quantity, price } = req.body;

            const cart = await addCart({ id, product_id, quantity, price });
            return successResponse({
                res,
                data: cart,
                status: 201,
                message: "Add to cart successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                data: error,
                status: 400,
                message: error.message,
            });
        }
    },

    getListCart: async (req, res) => {
        try {
            const { id } = req.user;
            const listCart = await getListCart(id);

            return successResponse({
                res,
                data: listCart,
                message: "Get list cart successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Get list cart failed",
            });
        }
    },
    removeFromCart: async (req, res) => {
        try {
            const { id } = req.user;
            const { product_id } = req.body;
            const cart = await removeCart({ id, product_id });
            return successResponse({
                res,
                data: cart,
                message: "Remove from cart successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Remove from cart failed",
            });
        }
    },
    updateCart: async (req, res) => {
        try {
            const { id } = req.user;
            const { product_id, quantity } = req.body;
            const cart = await updateCart({ id, product_id, quantity });
            return successResponse({
                res,
                data: cart,
                message: "Update cart successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Update cart failed",
            });
        }
    },
    removeAll: async (req, res) => {
        try {
            const { id: user_id } = req.user;
            Cart.destroy({ where: { user_id } });
            return successResponse({
                res,
                status: 200,
                message: "Remove all cart successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Remove all cart failed",
            });
        }
    },
};
