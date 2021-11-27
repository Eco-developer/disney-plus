import MoviesContainer from '../../components/movies-container/index.js';
import ImageSlider from '../../components/image-slider/index.js';
import Viewers from '../../components/Viewers/index.js';
import Select from '../../components/Select/index.js';
import Pagination from '../../components/Pagination/index.js';
import Loading from '../../components/Loading/index.js';
import TMDBInstance from '../../services/axios.js';
import TMDBRequests from '../../services/request.js';
import { CatalogueLoyout } from '../../global-styles/index.js'
import { 
	useState,
	useEffect
} from 'react';
import { 
	useSelector,
	useDispatch
} from "react-redux";
import { selectMovieGenres } from "../../features/movie/movieSlice.js";
import { setError } from '../../features/error/errorSlice.js';

const CatalogueMoviesPage = () => {
	const [movies, setMovies] = useState([]);
	const [moviesSlider, setMoviesSlider] = useState([]);
	const [page, setPage] = useState(1);
	const genres = useSelector(selectMovieGenres);
	const [genre, setGenre] = useState(genres[0]);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchMoviesSlider = async () => {
			try {
				const response = await TMDBInstance.get(`${TMDBRequests.movie.baseUrl}`);
				const { 
					data : {
						results
					}
				} = response;
				const sliderImages = results.filter(item => !!item.backdrop_path || !!item.poster_path).slice(0,10);
				setMoviesSlider(sliderImages);
			} catch(error) {
				dispatch(setError());
			}
		}
		fetchMoviesSlider();
	},[])

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await TMDBInstance.get(`${TMDBRequests.movie.baseUrl}&with_genres=${genre.id}&page=${page}`);
				const { 
					data: {
						results,
						total_pages,
					} 
				} = response;
				setMovies(results);
				const total = Math.min(99, total_pages)
				setTotalPages(total);
				setLoading(false);
			} catch (error) {
				dispatch(setError());		
			}	
		};
		fetchMovies();
	},[genre, page])
	return (
		<CatalogueLoyout>
			{moviesSlider.length ?
				<ImageSlider slider={moviesSlider}/>
			: null}
			<Viewers/>
			<Select
				options={genres}
				currentOption={genre}
				setGenre={setGenre}
				setPage={setPage}
			/>
			<MoviesContainer
				movies={movies}
			/>
			<Pagination
				setPage={setPage}
				currentPage={page}
				totalPages={totalPages}
				pageNeighbours={2}
			/>
			{(loading && !moviesSlider.length) ? 
				<Loading/> : 
			null}
		</CatalogueLoyout>
	)
}

export default CatalogueMoviesPage;