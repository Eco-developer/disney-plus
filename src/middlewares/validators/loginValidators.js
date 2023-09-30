import { body } from "express-validator";

export const loginValidators = [
    body("email")
    .trim()
    .escape()
    .notEmpty()
    .withMessage('The email is required.'),
    body("password")
    .trim()
    .escape()
    .notEmpty()
    .withMessage('The password is required.'),
]