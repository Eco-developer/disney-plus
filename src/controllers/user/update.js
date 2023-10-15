import { User } from '../../db';
import { createToken } from '../../helpers';

export const updateUser = async (req, res) => {
	const { 
		params : { 
			userId,
		},
		body: {
			watchlist_item,
		}
	} = req;

	try {
		const user = await User.findOne({_id: userId});
		if (!user.watchlist_items.map(item => item.id).includes(watchlist_item.id)) {
			user.watchlist_items = [...user.watchlist_items, watchlist_item];
		} else {
			user.watchlist_items = user.watchlist_items.filter(item => item.id !== watchlist_item.id);
		}
		await user.save();
		const {
			user_name,
			user_email,
			phone_number,
			watchlist_items,
            _id
		} = user;

		const token = createToken({
				user_name,
				user_email,
				phone_number,
				watchlist_items,
				_id
			}, 
			"30m"
		)

		res.status(200).send(token);
	} catch (error) {
		return res.status(404).send("User not found.");
	}
}