const Joi = require("joi");
const validRegister = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .email(
                new RegExp("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/")
            )
            .required(),
        password: Joi.string().min(6).required(),
        repeat_password: Joi.any().valid(Joi.ref("password")).required(),
        name: Joi.string().min(3).required(),
    });
    return schema.validate(data);
};
const validChangePassword = (data) => {
    const schema = Joi.object({
        oldPassword: Joi.string().min(6).required(),
        password: Joi.string()
            .min(6)
            .required()
            .not(Joi.ref("oldPassword"))
            .messages({
                "any.invalid":
                    '"password" must be different from "oldPassword"',
            }),
        repeat_password: Joi.any().valid(Joi.ref("password")).required(),
    });
    return schema.validate(data);
};
const validChangeEmail = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .email(
                new RegExp("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/")
            )
            .required(),
        repeat_email: Joi.any().valid(Joi.ref("email")).required(),
    });
    return schema.validate(data);
};

module.exports = { validRegister, validChangePassword, validChangeEmail };
