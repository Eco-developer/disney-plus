import { ContainerMain } from '../../global-styles/index.js'
import {
	Container,
	Content,
	BgImage,
	ContainerInner,
	ContainerInnerLogoOne,
	SignUp,
	Description,
	ContainerInnerLogoTwo,
} from './style.js';

const Home = () => (
	<ContainerMain>
		<Container>
      		<Content>
        		<ContainerInner>
          			<ContainerInnerLogoOne src="/images/cta-logo-one.svg" alt="" />
          			<SignUp>
          				Subscribe
          			</SignUp>
          				<Description>
            				The place where the story beggins.
          				</Description>
          				<ContainerInnerLogoTwo src="/images/cta-logo-two.png" alt="" />
        		</ContainerInner>
        		<BgImage />
      		</Content>
    	</Container>
	</ContainerMain>
)

export default Home;