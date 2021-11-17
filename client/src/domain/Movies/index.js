import MoviesContainer from '../../components/movies-container/index.js';
import ImageSlider from '../../components/image-slider/index.js';
import Viewers from '../../components/Viewers/index.js';
import Select from '../../components/Select/index.js';
import Loading from '../../components/Loading/index.js';
import TMDBInstance from '../../services/axios.js';
import TMDBRequests from '../../services/request.js';
import { CatalogueLoyout } from '../../global-styles/index.js'
import { 
	useState,
	useEffect
} from 'react';
import { useSelector } from "react-redux";
import { selectMovieGenres } from "../../features/movie/movieSlice.js";

const CatalogueMoviesPage = () => {
	const [movies, setMovies] = useState([]);
	const [moviesSlider, setMoviesSlider] = useState([]);
	const [page, setPage] = useState(1);
	const genres = useSelector(selectMovieGenres);
	const [genre, setGenre] = useState(genres[0]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchMoviesSlider = async () => {
			try {
				const response = await TMDBInstance.get(`${TMDBRequests.movie.baseUrl}`);
				const { 
					data : {
						results
					}
				} = response;
				setMoviesSlider(results.slice(0,10))
			} catch(error) {
				console.log(error)
			}
		}
		fetchMoviesSlider();
	},[])

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await TMDBInstance.get(`${TMDBRequests.movie.baseUrl}&with_genres=${genre.id}&page=${page}`);
			const { 
				data: {
					results,
					total_pages,
				} 
			} = response;
			setMovies(results)
			setLoading(false);
		}
		fetchMovies();
	},[genre])
	return (
		<CatalogueLoyout>
			<ImageSlider slider={moviesSlider}/>
			<Viewers/>
			<Select
				options={genres}
				currentOption={genre}
				setGenre={setGenre}
			/>
			<MoviesContainer
				movies={movies}
			/>
			{loading ? <Loading/> : null}
		</CatalogueLoyout>
	)
}

export default CatalogueMoviesPage;

/*
const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';
	

	const range = (from, to, step = 1) => {
		let i = from;
		const range = [];

		while (i <= to) {
			range.push(i);
			i += step;
		}
		return range;
	}

	const fetchPageNumbers = (currentPage, totalPages, pageNeighbours) => {
		const totalNumbers = (pageNeighbours * 2) + 3;
		const totalBlocks = totalNumbers + 2;

		if (totalPages > totalBlocks) {

			const startPage = Math.max(2, currentPage - pageNeighbours);
			const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
			let pages = range(startPage, endPage);

			const hasLeftSpill = startPage > 2;
			const hasRightSpill = (totalPages - endPage) > 1;
			const spillOffset = totalNumbers - (pages.length + 1);

			if (hasLeftSpill && !hasRightSpill) {
				const extraPages = range(startPage - spillOffset, startPage - 1);
				
				pages = [LEFT_PAGE, ...extraPages, ...pages];
			} else if (!hasLeftSpill && hasRightSpill) {
				const extraPages = range(endPage + 1, endPage + spillOffset);
				pages = [...pages, ...extraPages, RIGHT_PAGE];
			} else if (hasLeftSpill && hasRightSpill) {
				pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
			}		
		
			return [1, ...pages, totalPages];
		}
		return range(1, totalPages);
	}

	const handleMoveLeft = () => {
		const page = currentPage - (pageNeighbours * 2) - 1
		goToPage(page);
	}
 	
	const handleMoveRight = () => {
		const page = currentPage + (pageNeighbours * 2) + 1
		goToPage(page);
	}

 	if (totalPages <= 1 ) {
 		return null;
 	}

 	const pages = fetchPageNumbers(currentPage, totalPages, pageNeighbours);


	const goToPage = (page) => {

		const current = Math.max(0, Math.min(page, totalPages));

		setState(current)
	};*/

		/*<div className='pagination__container'>
 			<ul className='pagination'>
 				{pages.map((page) => (
 					<Page
 						key={uuid()}
 						page={page}
 						current={currentPage}
 						handleMoveLeft={handleMoveLeft}
 						handleMoveRight={handleMoveRight}
 						handleClick={handleClick}
 					/>
 				))}
 			</ul>
 		</div>
const Page = ({page, current, handleMoveLeft, handleMoveRight, handleClick}) => {
	if (page === LEFT_PAGE) {
		return(
			<li
				className='page__item'
				onClick={() => handleMoveLeft(page)}
			>
				<ArrowBackIos/>
			</li>
		)
	}

	if (page === RIGHT_PAGE) {
		return(
			<li
				className='page__item'
				onClick={() => handleMoveRight(page)}
			>
				<ArrowForwardIos/>
			</li>
		)
	}

	return (
		<li 
			className={`page__item${current === page ? ' activeItem' : ''}`}
			onClick={() => handleClick(page)}
		>
			{page}
		</li>
	)
}*/