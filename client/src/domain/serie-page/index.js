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

const SerieDetailsPage = () => {
	const { serieId } = useParams();
	const [serie, setSerie] = useState(null);
	const dispatch = useDispatch();
	
	useEffect(() => {
		const fetchSerie = async () => {
			const {
				series: {
					detailBase,
					detailQueries,
				}
			} = TMDBRequests;
			try {
				const response = await TMDBInstance.get(`${detailBase}${serieId}${detailQueries}`);
				const { data } = response;
				setSerie(data);
			} catch(error) {
				dispatch(setError());
			}
		};
		fetchSerie();
	},[serieId])
	return (
		<ContainerMain>
			{serie ? 
				<Details 
			 		movie={serie}
			 	/> :
			 	<Loading/>
			}
		</ContainerMain>
	)
}

export default SerieDetailsPage;