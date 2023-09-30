import mongoose from 'mongoose';
import User from './models/userModel.js';
require('dotenv').config();

const mongooseHeader = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

export const connectDb = () => {
	return (
		mongoose.connect(process.env.MONGO_URI, mongooseHeader)
		)
};

export { 
	User,
};