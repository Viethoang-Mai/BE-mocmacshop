const { Order, OrderItem, Product, sequelize } = require("../models/index");
const product = require("../models/product");
module.exports = {
    createOrderService: async ({
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
    }) => {
        console.log(
            id,
            address,
            phone_number,
            city,
            city_selected,
            country,
            note,
            payment_method,
            listCart,
            total_price
        );

        const transaction = await sequelize.transaction();
        try {
            for (const item of listCart) {
                const product = await Product.findByPk(item.product_id, {
                    transaction,
                });
                if (!product || product.stock < item.quantity) {
                    const error = new Error(
                        `Insufficient stock for product ID ${item.product_id}`
                    );
                    error.status = 400;
                    error.message = `Insufficient stock for product ID ${item.product_id}`;
                    throw error;
                }
                product.stock -= item.quantity;
                await product.save({ transaction });
            }
            const calculatedTotal = listCart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
            if (calculatedTotal !== total_price) {
                throw new Error("Total price mismatch. Please try again.");
            }

            const newOrder = await Order.create(
                {
                    user_id: id,
                    address: `${address}, ${
                        city_selected ? city_selected : city
                    }, ${country}`,
                    phone_number,
                    note,
                    payment_method,
                    total_price,
                },
                { transaction }
            );

            const orderItems = listCart.map((item) => ({
                order_id: newOrder.id,
                product_id: item.product_id,
                quantity: item.quantity,
                price: item.price,
                total: +item.quantity * +item.price,
            }));

            await OrderItem.bulkCreate(orderItems, { transaction });
            await transaction.commit();
            return newOrder;
        } catch (error) {
            await transaction.rollback();
            return error;
        }
    },
};
