import Page from '../Page/index.js';
import fetchPageNumbers from '../../services/fetch-page-numbers.js';
import {
	Container,
	PagesContainer,
} from './style.js';
import { v4 as uuid } from 'uuid';

const Pagination = ({setPage, currentPage, totalPages=1, pageNeighbours=2}) => {

	const goToPage = (page) => {
		const current = Math.max(0, Math.min(page, totalPages));
		document.querySelector('#select').scrollIntoView({behavior: "smooth"});
		setPage(current);
	};

	const handleMoveLeft = () => {
		const page = currentPage - (pageNeighbours * 2) - 1;
		goToPage(page);
	};
 	
	const handleMoveRight = () => {
		const page = currentPage + (pageNeighbours * 2) + 1;
		goToPage(page);
	};

 	if (totalPages <= 1 ) {
 		return null;
 	}

 	const pages = fetchPageNumbers(currentPage, totalPages, pageNeighbours);

	return(
		<Container>
 			<PagesContainer>
 				{pages.map((page) => (
 					<Page
 						key={uuid()}
 						page={page}
 						current={currentPage}
 						handleMoveLeft={handleMoveLeft}
 						handleMoveRight={handleMoveRight}
 						handleClick={goToPage}
 					/>
 				))}
 			</PagesContainer>
 		</Container>
 	)
}

export default Pagination;