import { User } from '../../db';
import { compare } from 'bcryptjs';
import { createToken } from '../../helpers';

export const login = async(req, res) => {
    const { body } = req;

    try {
        const {
			email,
            password,
        } = body;
		const signedUser = await User.findOne({user_email: email});
		if (!signedUser) {
            return res.status(400).send({type: "email", message: "Invalid email."});
        }

		const {
			user_password: hashedPassword,
			user_name,
			user_email,
			phone_number,
			watchlist_items,
            _id
		} = signedUser;

        const isValid = await compare(
            password,
            hashedPassword
        );

        if (!isValid) {
            return res.status(400).send({type: "password", message: "Wrong password."});
        }
		const token = createToken({
				user_name,
				user_email,
				phone_number,
				watchlist_items,
                _id
			}, 
			"30m"
		)

        return res.status(200).send(token);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}