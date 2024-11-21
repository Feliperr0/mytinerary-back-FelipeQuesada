import Joi from "joi-oid";

const schema = Joi.object({
    name: Joi.string()
        .required().regex(/^[a-zA-Z ]+$/)
        .min(3)
        .max(30)
        .messages({
            'any.required': 'Name is a required field',
            'string.empty': 'Name must not be empty',
            'string.pattern.base': 'Name can only contain letters and spaces',
            'string.min': 'Name must be at least 3 characters long',
            'string.max': 'Name must not exceed 30 characters'
        }),
    email: Joi.string()
        .required()
        .email()
        .messages({
            'any.required': 'Email is a required field',
            'string.empty': 'Email must not be empty',
            'string.email': 'Must be a valid email'
        }),
    password: Joi.string()
        .required()
        .min(8)
        .max(30)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$^+=!*()@%&]).{8,30}$'))
        .messages({
            'any.required': 'Password is a required field',
            'string.empty': 'Password must not be empty',
            'string.min': 'Password must be at least 8 characters long',
            'string.max': 'Password must not exceed 30 characters',
            'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        }),
    photo: Joi
        .string()
        .required()
        .uri()
        .messages({
            'any.required': 'Photo is a required field',
            'string.empty': 'Photo URL must not be empty',
            'string.uri': 'Must be a valid URL'
        })
});

export default schema;
