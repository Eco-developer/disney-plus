import Details from '../../components/Details/index.js';
import Loading from '../../components/Loading/index.js';
import TMDBInstance from '../../services/axios.js';
import TMDBRequests from '../../services/request.js'
import { ContainerMain } from '../../global-styles/index.js'
import { 
	useState,
	useEffect
} from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setError } from '../../features/error/errorSlice.js';

const MovieDetailsPage = () => {
	const { movieId } = useParams();
	const [movie, setMovie] = useState(null);
	const dispatch = useDispatch();
	
	useEffect(() => {
		const fetchMovie = async () => {
			const {
				movie: {
					detailBase,
					detailQueries,
				}
			} = TMDBRequests;
			try {
				const response = await TMDBInstance.get(`${detailBase}${movieId}${detailQueries}`);
				const { data } = response;
				setMovie(data);
			} catch(error) {
				dispatch(setError());
			}
		};
		fetchMovie();
	},[movieId])
	return (
		<ContainerMain>
			{movie ? 
				<Details 
			 		movie={movie}
			 	/> :
			 	<Loading/>
			}
		</ContainerMain>
	)
}

export default MovieDetailsPage;