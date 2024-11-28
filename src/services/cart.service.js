const { where } = require("sequelize");
const { Cart, Product } = require("../models/index");
module.exports = {
    addCart: async ({ id, product_id, quantity, price }) => {
        try {
            const cart = await Cart.findOne({
                where: { user_id: id, product_id: product_id },
            });
            if (!cart) {
                const newCart = await Cart.create({
                    user_id: id,
                    product_id: product_id,
                    quantity: quantity,
                    price: price,
                });

                const listCart = await Cart.findAll({
                    where: { user_id: id },
                    attributes: [
                        "id",
                        "user_id",
                        "product_id",
                        "quantity",
                        "price",
                    ],
                    include: [
                        {
                            model: Product,
                            as: "products",
                            attributes: [
                                "id",
                                "name",
                                "image_url",
                                "stock",
                                "description",
                            ],
                            exclude: ["created_at", "updated_at"],
                        },
                    ],
                });
                const total = listCart.reduce(
                    (a, b) => a + b.price * b.quantity,
                    0
                );
                return { listCart, total };
            }
            await cart.update({ quantity: +cart.quantity + +quantity });

            const listCart = await Cart.findAll({
                where: { user_id: id },
                attributes: [
                    "id",
                    "user_id",
                    "product_id",
                    "quantity",
                    "price",
                ],
                include: [
                    {
                        model: Product,
                        as: "products",
                        attributes: [
                            "id",
                            "name",
                            "image_url",
                            "stock",
                            "description",
                        ],
                        exclude: ["created_at", "updated_at"],
                    },
                ],
            });
            const total = listCart.reduce(
                (a, b) => a + b.price * b.quantity,
                0
            );
            return { listCart, total };
        } catch (error) {
            throw error;
        }
    },
    updateCart: async ({ id: user_id, product_id, quantity }) => {
        try {
            const cart = await Cart.findOne({ where: { user_id, product_id } });
            if (!cart) {
                const error = new Error("Cart not found");
                error.status = 404;
                error.message = "Cart not found";
                throw error;
            }

            await cart.update({ quantity });
            const listCart = await Cart.findAll({
                where: { user_id },
                attributes: [
                    "id",
                    "user_id",
                    "product_id",
                    "quantity",
                    "price",
                ],
                include: [
                    {
                        model: Product,
                        as: "products",
                        attributes: [
                            "id",
                            "name",
                            "image_url",
                            "stock",
                            "description",
                        ],
                        exclude: ["created_at", "updated_at"],
                    },
                ],
            });
            const total = listCart.reduce(
                (a, b) => a + b.price * b.quantity,
                0
            );
            return { listCart, total };
        } catch (error) {
            throw error;
        }
    },
    removeCart: async ({ id: user_id, product_id }) => {
        try {
            const cart = await Cart.findOne({ where: { user_id, product_id } });
            if (!cart) {
                const error = new Error("Cart not found");
                error.status = 404;
                error.message = "Cart not found";
                throw error;
            }

            await cart.destroy({ where: { user_id } });

            const listCart = await Cart.findAll({
                where: { user_id },
                attributes: [
                    "id",
                    "user_id",
                    "product_id",
                    "quantity",
                    "price",
                ],
                include: [
                    {
                        model: Product,
                        as: "products",
                        attributes: [
                            "id",
                            "name",
                            "image_url",
                            "stock",
                            "description",
                        ],
                        exclude: ["created_at", "updated_at"],
                    },
                ],
            });
            const total = listCart.reduce(
                (a, b) => a + b.price * b.quantity,
                0
            );
            return { listCart, total };
        } catch (error) {
            throw error;
        }
    },

    getListCart: async (id) => {
        try {
            const listCart = await Cart.findAll({
                where: { user_id: id },
                attributes: [
                    "id",
                    "user_id",
                    "product_id",
                    "quantity",
                    "price",
                ],
                include: [
                    {
                        model: Product,
                        as: "products",
                        attributes: [
                            "id",
                            "name",
                            "image_url",
                            "stock",
                            "description",
                        ],
                        exclude: ["created_at", "updated_at"],
                    },
                ],
            });
            if (!listCart) {
                const error = new Error("Cart not found");
                error.status = 404;
                error.message = "Cart not found";
                throw error;
            }
            const total = listCart.reduce(
                (a, b) => a + b.price * b.quantity,
                0
            );

            return { listCart, total };
        } catch (error) {
            throw error;
        }
    },
};
