import models from '../db/index.js';
import passport from 'passport';
import { Router } from 'express';

const router = Router();

const loginHandler = async (req, res, next) => {
	try {
		passport.authenticate('local', (err, user, info) => {
			if (err || !user) {
				return res.status(401).send(info);
			}
			req.logIn(user, async (err) => {
				const authUser = await models.User.findOne({_id: req.user._id});
				const {
					_doc: {
						user_password,
						...rest
					}
				} = authUser;
				res.status(200).send({...rest});
				next()
			})
		})(req, res, next);
	} catch (error) {
		res.status(500).send(error);
	}
};

router.post('/', loginHandler);

export default router;