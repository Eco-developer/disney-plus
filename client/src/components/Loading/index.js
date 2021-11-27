import Loader from "react-loader-spinner";
import { 
	Container,
	Logo
} from './style.js';

const Loading = () => (
	<Container>
		<div>
			<Logo>
      	<img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      	<Loader
       		type="ThreeDots"
        	color="#FFF"
        	height={100}
        	width={100}
      	/>
		</div>
	</Container>
)

export default Loading;