import { SignInForm } from '../../components/Form/index.js'
import { 
	ContainerMain,
	ContainerCenter
} from '../../global-styles/index.js';

const SignInPage = () => {
	return (
		<ContainerMain>
			<ContainerCenter>
				<SignInForm/>
			</ContainerCenter>
		</ContainerMain>
	)
}

export default SignInPage;