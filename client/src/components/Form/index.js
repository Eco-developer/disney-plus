import SignInForm from './sign-in-form.js';
import SignUpForm from './sign-up-form.js';

const Form = ({onSubmit, children}) => (
	<form onSubmit={onSubmit}>
		{children}
	</form>
)

export {
 	SignInForm,
 	SignUpForm
}
export default Form;