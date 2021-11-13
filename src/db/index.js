import mongoose from 'mongoose';
import User from './models/userModel.js';
import 'dotenv/config';

const mongooseHeader = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

export const connectDb = () => {
	return (
		mongoose.connect(process.env.MONGO_URI, mongooseHeader)
		)
};

const models = { 
	User,
};

export default models;