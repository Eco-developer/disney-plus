import bcrypt from 'bcryptjs';
import models from '../db/index.js';

const localStrategyCallback = async (user_email, user_password, callback) => {
	try {		
		const user = await models.User.findOne({user_email});
		if (!user) { 			
			return callback(null, false,  { message: "Incorrect useremail", type: 'email'})
		}

		const { 
			user_password: password, 
			user_name,
			_id, ...rest
		} = user.toObject();
		const isValid = await bcrypt.compare(
			user_password,
			password
		)
		if (!isValid) {
			return callback(null, false,  { message: "Incorrect password", type: 'password'})
		}
		const secureUser = {
			user_name,
			_id,
		}

		return callback(null, secureUser);

	} catch (error) {
		return callback(
			null, 
			false, 
			{statusCode: 400, message: error.message}
		)
	}
}

const serializeCallback = (user, done) => {
	done(null, user._id)
}

const deSerializeCallback = (id, done) => {
	models.User.findOne({_id: id}, (error, user) =>{
		const { 
			user_name,
			_id,
		} = user
		const secureUser = {
			user_name,
			_id,
		}
		done(error, secureUser)
	})
}

export {
	localStrategyCallback,
	serializeCallback,
	deSerializeCallback,
};