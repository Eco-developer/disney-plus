import jwt from 'jsonwebtoken';
require('dotenv').config();

export const createToken = (userData, expiresIn="30min") => {
	const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn });
	return token;
}