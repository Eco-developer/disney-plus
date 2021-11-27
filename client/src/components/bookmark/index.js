import axios from 'axios';
import DISNEY_API from '../../const/disneyApi.js';
import { Container } from './style.js';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { useState } from 'react';
import { 
	useSelector,
	useDispatch,
} from "react-redux";
import { 
	selectUser,
	updateUserWatchlist
} from '../../features/user/userSlice.js';

const Bookmark = ({movie}) => {
	const user = useSelector(selectUser);
	const marked = user.watchlist_items.map(item => item.id).includes(movie.id);
	const [bookmarked, setBookmarked] = useState(marked);
	const [processing, setProcessing] = useState(false);
	const dispatch = useDispatch();

	const handleRequest = async () => {
		if (processing) {return}
		setProcessing(true);
		setBookmarked(prevState => !prevState);
		try {
			const response = await axios.put(
				`${DISNEY_API}update/user/${user._id}`,
				{ watchlist_item: {...movie} }, 
			)
			const { data } = response;
			setProcessing(false);
			dispatch(updateUserWatchlist(data));
		} catch (error) {
			setProcessing(false);
		}
	};

	return (
		<Container 
			onClick={handleRequest} 
			active={bookmarked}
		>
			<BsFillBookmarkStarFill/>
		</Container>
	)
}

export default Bookmark;