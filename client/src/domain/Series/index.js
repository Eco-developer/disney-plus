import MoviesContainer from '../../components/movies-container/index.js';
import ImageSlider from '../../components/image-slider/index.js';
import Viewers from '../../components/Viewers/index.js';
import Select from '../../components/Select/index.js';
import Pagination from '../../components/Pagination/index.js';
import Loading from '../../components/Loading/index.js';
import TMDBInstance from '../../services/axios.js';
import TMDBRequests from '../../services/request.js';
import { CatalogueLoyout } from '../../global-styles/index.js';
import { 
	useState,
	useEffect
} from 'react';
import { 
	useSelector,
	useDispatch
} from "react-redux";
import { selectSeriesGenres } from '../../features/series/seriesSlice.js';
import { setError } from '../../features/error/errorSlice.js';

const CatalogueSeriesPage = () => {
	const [series, setSeries] = useState([]);
	const [seriesSlider, setSeriesSlider] = useState([]);
	const [page, setPage] = useState(1);
	const genres = useSelector(selectSeriesGenres);
	const [genre, setGenre] = useState(genres[0]);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchSeriesSlider = async () => {
			try {
				const response = await TMDBInstance.get(`${TMDBRequests.series.baseUrl}`);
				const { 
					data : {
						results,
					},
				} = response;
				const sliderImages = results.filter(item => !!item.backdrop_path || !!item.poster_path).slice(0,10);
				setSeriesSlider(sliderImages);
			} catch(error) {
				dispatch(setError());
			}
		}
		fetchSeriesSlider();
	},[])

	useEffect(() => {
		const fetchSeries = async () => {
			try {
				const response = await TMDBInstance.get(`${TMDBRequests.series.baseUrl}&with_genres=${genre.id}&page=${page}`);
				const { 
					data: {
						results,
						total_pages,
					} 
				} = response;
				setSeries(results);
				const total = Math.min(99, total_pages)
				setTotalPages(total);
				setLoading(false);
			} catch(error) {
				dispatch(setError());
			}
		}
		fetchSeries();
	},[genre, page])
	return (
		<CatalogueLoyout>
			{seriesSlider.length ?
			 <ImageSlider slider={seriesSlider}/>
			 : null
			}
			<Viewers/>
			<Select
				options={genres}
				currentOption={genre}
				setGenre={setGenre}
				setPage={setPage}
			/>
			<MoviesContainer
				movies={series}
			/>
			<Pagination
				setPage={setPage}
				currentPage={page}
				totalPages={totalPages}
				pageNeighbours={2}
			/>
			{(loading && !seriesSlider.length) ? 
				<Loading/> : 
			null}
		</CatalogueLoyout>
	)
}

export default CatalogueSeriesPage;