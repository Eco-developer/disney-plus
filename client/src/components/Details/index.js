import Video from '../../components/Video/index.js';
import { 
	Background,
	Banner,
	MoreDetails,
	Footer
} from '../details-sections/index.js';
import { useState } from 'react';

const Details = ({movie}) => {
	const [open, setOpen] = useState(false);
	const video = movie.videos?.results?.find(video => video.type === 'Trailer');

	const handlePlay = () => {
		setOpen(prevState => !prevState);
	};

	return (
		<>
			<Background movie={movie}/>
			<Banner
				movie={movie}
				handlePlay={handlePlay}
			/>
			<MoreDetails movie={movie}/>
			<Footer/>
			{(open && video) ?
				<Video 
					videoId={video?.key}
					handlePlay={handlePlay}
				/>
			: null}	
		</>
	)
}

export default Details;