import { PageBase } from './style.js';
import {
	IoIosArrowBack,
	IoIosArrowForward,
} from 'react-icons/io';
import {
	LEFT_PAGE,
	RIGHT_PAGE,
} from '../../services/fetch-page-numbers.js';

const Page = ({page, current, handleMoveLeft, handleMoveRight, handleClick}) => {
	if (page === LEFT_PAGE) {
		return(
			<PageBase
				onClick={() => handleMoveLeft(page)}
			>
				<IoIosArrowBack/>
			</PageBase>
		)
	}

	if (page === RIGHT_PAGE) {
		return(
			<PageBase
				onClick={() => handleMoveRight(page)}
			>
				<IoIosArrowForward/>
			</PageBase>
		)
	}

	return (
		<PageBase 
			active={current === page}
			onClick={() => handleClick(page)}
		>
			{page}
		</PageBase>
	)
}

export default Page;