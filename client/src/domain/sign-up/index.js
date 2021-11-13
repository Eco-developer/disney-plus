import { SignUpForm } from '../../components/Form/index.js'
import { 
	ContainerMain,
	ContainerCenter
} from '../../global-styles/index.js'

const SignUpPage = () => {
	return (
		<ContainerMain>
			<ContainerCenter>
				<SignUpForm/>
			</ContainerCenter>
		</ContainerMain>
	)
}

export default SignUpPage;