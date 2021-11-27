import models from '../db/index.js';
import { Router } from 'express';

const router = Router();

const updateUserHandler = async (req, res) => {
	const { 
		params : { 
			userId,
		},
		body: {
			watchlist_item,
		}
	} = req;

	try {
		const user = await models.User.findOne({_id: userId});
		if (!user.watchlist_items.map(item => item.id).includes(watchlist_item.id)) {
			user.watchlist_items = [...user.watchlist_items, watchlist_item];
		} else {
			user.watchlist_items = user.watchlist_items.filter(item => item.id !== watchlist_item.id);
		}
		await user.save();
		res.status(200).send(watchlist_item);
	} catch (error) {
		res.status(500).send(error);
	}
}

router.put('/user/:userId', updateUserHandler);

export default router;