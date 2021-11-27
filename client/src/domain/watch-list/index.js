import MoviesContainer from '../../components/movies-container/index.js';
import { CatalogueLoyout } from '../../global-styles/index.js';
import { 
	Container,
	ImageContainer,
	WatchListHead,
	WatchListMain,
	NameContainer,
} from './style.js';
import { useSelector } from "react-redux";
import { selectUser } from '../../features/user/userSlice.js';

const WatchList = () => {
	const { 
		watchlist_items, 
		user_name
	} = useSelector(selectUser);
	return (
		<CatalogueLoyout>
			<Container>
				<WatchListHead>
					<ImageContainer>
						<img 
							src="/images/logo.svg" 
							alt="Disney+"
						/>
					</ImageContainer>
					<NameContainer>
						<h5>
							{user_name}
						</h5>
					</NameContainer>
				</WatchListHead>
				<WatchListMain>
					{watchlist_items.length ?
						<MoviesContainer movies={watchlist_items}/>
					: <h5>
						Add a serie or movie to your WatchList.
					</h5>}
				</WatchListMain>
			</Container>
		</CatalogueLoyout>
	)
}

export default WatchList;