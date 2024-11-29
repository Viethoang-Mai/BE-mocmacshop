const { Favorite, Product } = require("../models");
const { get } = require("../utils/redis");
const { successResponse, errorResponse } = require("../utils/response");
const { Op, Sequelize } = require("sequelize");

module.exports = {
    addFavorite: async (req, res) => {
        try {
            const { id: user_id } = req.user;

            const { product_id } = req.body;

            if (!user_id || !product_id) {
                return errorResponse({
                    res,
                    errors: "Missing required fields",
                });
            }
            const favorite = await Favorite.findOrCreate({
                where: {
                    product_id,
                    user_id,
                },
                // product_id,
                // user_id,
                // created_at: new Date(),
                // updated_at: new Date(),
            });

            return successResponse({
                res,
                data: favorite,
                message: "Add favorite successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
            });
        }
    },
    removeFavorite: async (req, res) => {
        try {
            const { id: user_id } = req.user;
            const { product_id } = req.body;
            if (!user_id || !product_id) {
                return errorResponse({
                    res,
                    errors: "Missing required fields",
                });
            }
            const favorite = await Favorite.findOne({
                where: { product_id, user_id },
            });
            if (!favorite) {
                return errorResponse({
                    res,
                    errors: "Favorite not found",
                });
            }
            await Favorite.destroy({ where: { product_id, user_id } });
            return successResponse({
                res,
                message: "Remove favorite successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
            });
        }
    },
    getFavorites: async (req, res) => {
        try {
            const { id: user_id } = req.user;

            const favorites = await Favorite.findAll({
                where: { user_id },
                include: [
                    {
                        model: Product,
                        as: "product",
                        attributes: {
                            include: [
                                [
                                    Sequelize.literal(`COALESCE((
                                            SELECT AVG(reviews.rating)
                                            FROM reviews
                                            WHERE reviews.product_id = "product"."id"
                                        ), 0)`),
                                    "avgRating",
                                ],
                                [
                                    Sequelize.literal(`(
                                            SELECT COUNT(reviews.id)
                                            FROM reviews
                                            WHERE reviews.product_id = "product"."id"
                                        )`),
                                    "totalReviews",
                                ],
                                [
                                    Sequelize.literal(`(
                                        SELECT CASE
                                            WHEN ${user_id} != -1 AND EXISTS (
                                                SELECT 1
                                                FROM favorites
                                                WHERE favorites.product_id = "product"."id"
                                                AND favorites.user_id = ${user_id}
                                            )
                                            THEN true
                                            ELSE false
                                        END
                                    )`),
                                    "isFavorite",
                                ],
                            ],
                            exclude: ["created_at", "updated_at", "user_id"],
                        },
                    },
                ],
            });
            return successResponse({
                res,
                data: favorites,
                message: "Get favorites successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
            });
        }
    },
};
