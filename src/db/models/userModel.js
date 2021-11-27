import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
	{
		user_name: {
			type: String,
			required: true,
			trim: true,
		},
		user_password: {
			type: String,
			required: true,
			trim: true,
		},
		user_email: {
			unique: true,
			type: String,
			required: true,
			trim: true,
		},
		phone_number: {
			type: String,
			trim: true,
			default: '',
		},
		watchlist_items: {
			type: Array,
			default: [],
		}
	},
);

const User = mongoose.model("User", userSchema);

export default User;