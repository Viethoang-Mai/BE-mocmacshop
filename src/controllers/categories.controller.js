const { Category } = require("../models/index");
const { successResponse, errorResponse } = require("../utils/response");
module.exports = {
    async index(req, res) {
        try {
            const categories = await Category.findAll({
                attributes: { exclude: ["created_at", "updated_at"] },
            });
            if (!categories) {
                const error = new Error("Get categories failed");
                error.status = 404;
                throw error;
            }
            return successResponse({
                res,
                data: categories,
                message: "Get categories successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Get categories failed",
            });
        }
    },
};
