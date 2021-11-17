import MoviesContainer from '../../components/movies-container/index.js';
import ImageSlider from '../../components/image-slider/index.js';
import Viewers from '../../components/Viewers/index.js';
import Select from '../../components/Select/index.js';
import Loading from '../../components/Loading/index.js';
import TMDBInstance from '../../services/axios.js';
import TMDBRequests from '../../services/request.js';
import { CatalogueLoyout } from '../../global-styles/index.js';
import { 
	useState,
	useEffect
} from 'react';
import { useSelector } from "react-redux";
import { selectSeriesGenres } from '../../features/series/seriesSlice.js'

const CatalogueSeriesPage = () => {
	const [series, setSeries] = useState([]);
	const [seriesSlider, setSeriesSlider] = useState();;
	const [page, setPage] = useState(1);
	const genres = useSelector(selectSeriesGenres);
	const [genre, setGenre] = useState(genres[0]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchSeriesSlider = async () => {
			try {
				const response = await TMDBInstance.get(`${TMDBRequests.series.baseUrl}`);
				const { 
					data : {
						results
					}
				} = response;
				setSeriesSlider(results.slice(0,10))
			} catch(error) {
				console.log(error)
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
				setLoading(false);
			} catch(error) {
				console.log(error)
			}
		}
		fetchSeries();
	},[genre])
	return (
		<CatalogueLoyout>
			<ImageSlider slider={seriesSlider}/>
			<Viewers/>
			<Select
				options={genres}
				currentOption={genre}
				setGenre={setGenre}
			/>
			<MoviesContainer
				movies={series}
			/>
			{loading ? <Loading/> : null}
		</CatalogueLoyout>
	)
}

export default CatalogueSeriesPage;