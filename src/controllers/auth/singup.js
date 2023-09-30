import { User } from '../../db';
import { hash } from 'bcryptjs';
import { createToken } from '../../helpers';

export const signup = async (req, res) => {
    const { body } = req;
    try {
 
        const {
			user_password,
            user_email,
            ...rest
        } = body;
        const user = await User.findOne({user_email});
        if (user) {
            return res.status(400).send({type: "email", message: "Email is already registered."});
        }
        const hashedPassword = await hash(user_password, 8);
        await User.create({
            ...rest, 
            user_email,
            user_password: hashedPassword,
        });
        const signedUser = await User.findOne({user_email});
        
        const { 
			user_name,
			phone_number,
			watchlist_items,
            _id
        } = signedUser;

        const token = createToken({
				user_email, 
				user_name,
				phone_number,
				watchlist_items,
                _id
			}, 
			"30m"
		);

        return res.status(200).send(token);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}