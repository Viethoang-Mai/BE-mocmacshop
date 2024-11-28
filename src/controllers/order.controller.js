const { successResponse, errorResponse } = require("../utils/response");
const { Order, OrderItem, Product } = require("../models/index");
const { createOrderService } = require("../services/order.service");
const { where } = require("sequelize");
module.exports = {
    createOrder: async (req, res) => {
        try {
            const { id } = req.user;
            const {
                address,
                phone_number,
                city,
                city_selected,
                country,
                note,
                payment_method,
                listCart,
                total: total_price,
            } = req.body;
            if (
                !address ||
                !phone_number ||
                !country ||
                !payment_method ||
                !listCart ||
                !listCart.length
            ) {
                const error = new Error("Missing required fields");
                error.status = 400;
                error.message = "Missing required fields";
                throw error;
            }
            const newOrder = await createOrderService({
                id,
                address,
                phone_number,
                city,
                city_selected,
                country,
                note,
                payment_method,
                listCart,
                total_price,
            });
            return successResponse({
                res,
                data: newOrder,
                message: "Create order successfully",
                status: 201,
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Create order failed",
            });
        }
    },
    getOrders: async (req, res) => {
        console.log(req.user.id);

        try {
            const orders = await Order.findAll({
                where: { user_id: req.user.id },
            });
            return successResponse({
                res,
                data: orders,
                message: "Get orders successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Get orders failed",
            });
        }
    },
    findAnOrder: async (req, res) => {
        try {
            const { id: user_id } = req.user;
            const { id } = req.params;
            console.log(id, user_id);

            const order = await Order.findOne({
                where: { id, user_id },

                include: [
                    {
                        model: OrderItem,
                        as: "orderItems",
                        attributes: ["id", "quantity", "price", "total"],
                        include: [
                            {
                                model: Product,
                                as: "product",

                                attributes: [
                                    "name",
                                    "image_url",
                                    "description",
                                ],
                            },
                        ],
                    },
                ],
            });

            return successResponse({
                res,
                data: order,
                message: "Get order successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Get order failed",
            });
        }
    },
};
