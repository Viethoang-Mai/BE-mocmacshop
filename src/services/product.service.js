const {
    Product,
    Category,
    Review,
    User,
    Favorite,
} = require("../models/index");
const { Sequelize, Op } = require("sequelize");

module.exports = {
    getProducts: async () => {
        try {
            const products = await Category.findAll({
                attributes: { exclude: ["created_at", "updated_at"] },
                include: [
                    {
                        model: Product,
                        as: "products",
                        attributes: {
                            include: [
                                [
                                    Sequelize.literal(`(
                                            SELECT COALESCE(AVG(reviews.rating), 0)
                                            FROM reviews
                                            WHERE reviews.product_id = products.id
                                        )`),
                                    "avgRating",
                                ],
                                [
                                    Sequelize.literal(`(
                                            SELECT COUNT(reviews.id)
                                            FROM reviews
                                            WHERE reviews.product_id = products.id
                                        )`),
                                    "totalReviews",
                                ],
                            ],
                            exclude: ["created_at", "updated_at", "product_id"],
                        },
                        required: false,
                    },
                ],
            });

            if (!products) {
                const error = new Error("Get products failed");
                error.status = 404;
                throw error;
            }
            return products;
        } catch (error) {
            throw error;
        }
    },
    getProductsByFilter: async (
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
    ) => {
        try {
            const where = {};
            if (q) {
                where.name = {
                    [Op.iLike]: `%${q}%`,
                };
            }
            if (_category) {
                where.category_id = _category;
            }

            where.price = {
                [Op.between]: [_minP, _maxP],
            };

            if (_minRating) {
            }

            const offset = (_page - 1) * _limit;

            const products = await Product.findAndCountAll({
                attributes: {
                    include: [
                        [
                            Sequelize.literal(`COALESCE((
                                    SELECT AVG(reviews.rating)
                                    FROM reviews
                                    WHERE reviews.product_id = "Product"."id"
                                ), 0)`),
                            "avgRating",
                        ],
                        [
                            Sequelize.literal(`(
                                    SELECT COUNT(reviews.id)
                                    FROM reviews
                                    WHERE reviews.product_id = "Product"."id"
                                )`),
                            "totalReviews",
                        ],
                        [
                            Sequelize.literal(`(
                                SELECT CASE
                                    WHEN ${id} != -1 AND EXISTS (
                                        SELECT 1
                                        FROM favorites
                                        WHERE favorites.product_id = "Product"."id"
                                        AND favorites.user_id = ${id}
                                    )
                                    THEN true
                                    ELSE false
                                END
                            )`),
                            "isFavorite",
                        ],
                    ],
                    exclude: ["created_at", "updated_at", "product_id"],
                },

                where: {
                    ...where,
                },
                order: [[_sort, _order]],
                limit: _limit,
                offset,
            });

            return products;
        } catch (error) {}
    },
    getProduct: async (id) => {
        try {
            const product = await Product.findByPk(id, {
                include: [
                    {
                        model: Review,
                        as: "reviews",
                        attributes: {
                            exclude: ["created_at", "updated_at"],
                        },
                        include: [
                            {
                                model: User,
                                as: "user",
                                attributes: ["name", "email", "updated_at"],
                            },
                        ],
                    },
                ],
                attributes: {
                    include: [
                        [
                            Sequelize.literal(`COALESCE((
                                    SELECT AVG(reviews.rating)
                                    FROM reviews
                                    WHERE reviews.product_id = "Product"."id"
                                ), 0)`),
                            "avgRating",
                        ],
                        [
                            Sequelize.literal(`(
                                    SELECT COUNT(reviews.id)
                                    FROM reviews
                                    WHERE reviews.product_id = "Product"."id"
                                )`),
                            "totalReviews",
                        ],
                        [
                            Sequelize.literal(`(
                                SELECT CASE
                                    WHEN ${id} != -1 AND EXISTS (
                                        SELECT 1
                                        FROM favorites
                                        WHERE favorites.product_id = "Product"."id"
                                        AND favorites.user_id = ${id}
                                    )
                                    THEN true
                                    ELSE false
                                END
                            )`),
                            "isFavorite",
                        ],
                    ],
                    exclude: ["created_at", "updated_at", "product_id"],
                },
            });
            if (!product) {
                const error = new Error("Get product failed");
                error.status = 404;
                throw error;
            }
            return product;
        } catch (error) {
            throw error;
        }
    },
};
