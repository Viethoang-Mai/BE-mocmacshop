module.exports = {
    successResponse: ({ res, data, status = 200, message = "", meta = {} }) => {
        return res.status(status).json({
            success: true,
            data,
            message,
            ...meta,
        });
    },
    errorResponse: ({ res, errors = "", status = 500, message }) => {
        return res.status(status).json({
            success: false,
            errors,
            message,
        });
    },
};
