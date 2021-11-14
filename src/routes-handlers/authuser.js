import models from '../db/index.js';
import { Router } from 'express';

const router = Router();

const authUserHandler = async (req, res) => {
	try {
		if (req.isAuthenticated()) {
			const authUser = await models.User.findOne({_id: req.user._id});
			const {
				_doc: {
					user_password,
					...rest
				}
			} = authUser;
			res.status(200).send({...rest});
		} else {
			res.status(200).send('');
		}
	} catch (error) {
		res.status(500).send(error);
	}
	
}

router.get('/', authUserHandler);

export default router;