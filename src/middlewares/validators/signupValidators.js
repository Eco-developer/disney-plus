import { body } from "express-validator";
import { 
    emailPattern,
    passwordPattern
} from "../../const/patterns";

export const signupValidators = [
    body("user_name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage('The name is required.'),
    body("user_email")
    .trim()
    .escape()
    .notEmpty()
    .withMessage('The email is required.')
    .matches(new RegExp(emailPattern, "gmi"))
    .withMessage('Invalid email format.'),
    body("user_password")
    .trim()
    .escape()
    .notEmpty()
    .withMessage('The password is required.')
    .matches(new RegExp(passwordPattern, "gmi"))
    .withMessage('Invalid password format.'),
]