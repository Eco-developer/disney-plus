import {
	Container,
	InnerContainer,
	Close,
} from './style.js';
import { MdCancel } from 'react-icons/md';

const Video = ({videoId, handlePlay}) =>(
	<Container>
		<Close onClick={handlePlay}>
			<MdCancel/>
		</Close>
		<InnerContainer>
			<iframe
				src={`https://www.youtube.com/embed/${videoId}`}
				title="YouTube video player" 
				frameBorder="0" 
				allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				allowFullScreen
			>
			</iframe>
		</InnerContainer>
	</Container>	
)

export default Video;