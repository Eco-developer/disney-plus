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
import { useHistory } from 'react-router-dom';
import { SIGNUP_PAGE } from '../../const/routes.js';

const Home = () => {
  const { push } = useHistory();

  const goToSignUpPage = () => {
    push(SIGNUP_PAGE);
  };

  return (
	  <ContainerMain>
		  <Container>
      	<Content>
        	<ContainerInner>
          	<ContainerInnerLogoOne src="/images/cta-logo-one.svg" alt="" />
          	<SignUp onClick={goToSignUpPage}>
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
}
export default Home;