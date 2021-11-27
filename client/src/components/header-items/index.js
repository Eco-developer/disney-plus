import {
  HeaderItemsBase,
  HamburgerMenu,
  Item
} from './style.js';
import { HiHome } from 'react-icons/hi';
import { 
	FiPlus,
	FiMenu,
} from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { 
	RiMovie2Fill,
	RiTvFill,
} from 'react-icons/ri';
import { useState } from 'react';
import { 
  useHistory,
  useLocation,
} from "react-router-dom";
import { v4 as uuid } from 'uuid';
import {
	LANDING_PAGE,
	PROFILE_PAGE,
	CATALOGUE_MOVIES,
	CATALOGUE_SERIES,
	WATCH_LIST,
} from '../../const/routes.js';

const HeaderItems = () => {
	const [open, setOpen] = useState(false);
	const { pathname } =  useLocation();
	const { push } = useHistory();

	const items = [{Icon: HiHome, text: 'HOME', page: LANDING_PAGE}, {Icon: FiPlus, text: 'WATCHLIST', page: WATCH_LIST}, {Icon: CgProfile, text: 'PROFILE', page: PROFILE_PAGE}, {Icon: RiMovie2Fill, text: 'MOVIES', page: CATALOGUE_MOVIES}, {Icon: RiTvFill, text: 'SERIES', page: CATALOGUE_SERIES}]
	const handleOpen = () => {
		setOpen(prevState => !prevState);
	};

	const goToPage = (page) => {
		if (open) { 
			setOpen(false) 
		}
		
		if (page === LANDING_PAGE) {
			if (pathname !== LANDING_PAGE) {
				push(LANDING_PAGE);
			}
			return;
		}
    	if (pathname.slice(1) !== page) {
      		push(page);
    	}
  	}

	return (
		<>
			<HeaderItemsBase open={open}>
				{items.map(({Icon, text, page}) => (
					<HeaderItem
						Icon={Icon}
						text={text}
						key={uuid()}
						handlePage={goToPage}
						page={page}
						current={(pathname === page) ? true : (page !== LANDING_PAGE && pathname.includes(page)) ? true : false }
					/>
				))}
        	</HeaderItemsBase>
        	<HamburgerMenu>
        		<FiMenu onClick={handleOpen}/>
        	</HamburgerMenu>
        </>
	)
}

const HeaderItem = ({Icon, text, handlePage, page, current}) => {
	const handleClick = () => {
		handlePage(page)
	}

	return (
		<Item 
			current={current} 
			onClick={handleClick}
		>	
        	<Icon/>
        	<span>{text}</span>
    	</Item>
	)
}

export default HeaderItems;