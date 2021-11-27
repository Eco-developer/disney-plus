import {
	Wrap,
	Image,
	Stats,
	Stat,
	DetailsContainer,
} from './style.js';
import { AiFillStar } from 'react-icons/ai';
import { FaThumbsUp } from 'react-icons/fa';
import { useHistory } from "react-router-dom";
import {
	CATALOGUE_MOVIES,
	CATALOGUE_SERIES,
} from '../../const/routes.js';

const base_url = 'https://image.tmdb.org/t/p/original/';

const MovieCard = ({movie}) => {
	const { push } = useHistory();
	
	const handleClick = () => {
		push(`${movie.title ? CATALOGUE_MOVIES : CATALOGUE_SERIES}/${movie.id}`);
	}

	return (
		<Wrap onClick={handleClick}>
			<DetailsContainer>
				<h6>
					{movie.title || movie.name}
				</h6>
				<Stats>
					<Stat>
						<p>
							{movie.overview}
						</p>
					</Stat>
					<Stat>
						<AiFillStar/>
						<p>
							{movie.vote_average}
						</p>
					</Stat>
					<Stat>
						<FaThumbsUp/>
						<p>
							{movie.vote_count}
						</p>
					</Stat>
				</Stats>
			</DetailsContainer>
			<Image 
				src={`${base_url}${movie.backdrop_path || movie.poster_path}`} 
				alt='movie-card-img'
			/>
		</Wrap>
	)
}

export default MovieCard;