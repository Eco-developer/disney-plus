import bcrypt from 'bcryptjs';
import models from '../db/index.js';
import { Router } from 'express';
import {
	emailPattern, 
	passwordPattern
} from '../const/patterns.js';

const validate = (email, password) => {
	const emailValidator = new RegExp(emailPattern);
	const passwordValidator = new RegExp(passwordPattern);
	return emailValidator.test(email) && passwordValidator.test(password);
}
const router = Router();

const signUpHandler = async (req, res) => {
	const isValid = validate(req.body.user_email, req.body.user_password);

	if (!isValid) {
		return res.status(400).send('email or passaword are invalids')
	}

	let user = await models.User.findOne({user_email: req.body.user_email});
	if (user) {
		return res.status(400).send({
			type: 'email', 
			message: 'User with this email address already exist'})
	}
	try {
		const hashPassword = await bcrypt.hash(req.body.user_password, 8);
		user = new models.User({...req.body, user_password: hashPassword});
		await user.save();
		const signedUser = await models.User.findOne({user_email: req.body.user_email});
		
		const { 
			user_password, 
			...rest 
		} = signedUser._doc;
		
		res.status(201).send({...rest});
	} catch (error) {
		return res.status(500).send('something went wrong')
	}
};

router.post('/', signUpHandler);

export default router;