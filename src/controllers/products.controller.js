const { Product, Category, Review } = require("../models/index");
const redis = require("../utils/redis");
const { verifyAccessToken, verifyRefreshToken } = require("../utils/jwt");
const { successResponse, errorResponse } = require("../utils/response");
const {
    getProducts,
    getProductsByFilter,
    getProduct,
} = require("../services/product.service");
module.exports = {
    index: async (req, res) => {
        try {
            const products = await getProducts();

            return successResponse({
                res,
                data: products,
                message: "Get products successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Get products failed",
            });
        }
    },
    filter: async (req, res) => {
        let id = -1;

        try {
            const authorizationHeader = req.get("Authorization");
            if (
                authorizationHeader &&
                authorizationHeader.startsWith("Bearer ")
            ) {
                const accessToken = authorizationHeader.split(" ")[1];
                if (accessToken) {
                    const { userId } = verifyAccessToken(accessToken);
                    id = userId;
                }
            }
            const {
                _category,
                _minP = 0,
                _maxP = 10000,
                _order = "desc",
                _sort = "price",
                _minRating,
                q,
                _limit = 12,
                _page = 1,
            } = req.query;

            const { rows: products, count } = await getProductsByFilter(
                _category,
                _minP,
                _maxP,
                _order,
                _sort,
                _minRating,
                q,
                _limit,
                _page,
                id
            );

            return successResponse({
                res,
                data: products,
                message: "Get products successfully",
                meta: {
                    total: count,
                },
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Get products failed",
            });
        }
    },
    detail: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await getProduct(id);
            return successResponse({
                res,
                data: product,
                message: "Get product successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Get product failed",
            });
        }
    },
};
