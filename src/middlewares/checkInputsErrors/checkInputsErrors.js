import { validationResult } from "express-validator";

export const checkInputsErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send(
            errors.array().map(error => error.msg).join(" ")
        );
    } else {
        next()
    }
}