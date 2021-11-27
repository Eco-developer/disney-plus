import Form from './index.js';
import Input from '../Input/index.js';
import CustomError from '../Error/index.js';
import axios from 'axios';
import DISNEY_API from '../../const/disneyApi.js';
import { 
	FormContainer,
	FormGroup,
	SubmitButton,
	Logo
} from './style.js';
import { useState } from 'react';
import { setUserLoginDetails } from '../../features/user/userSlice.js';
import { useDispatch } from 'react-redux';
import { 
	Link,
	useHistory 
} from 'react-router-dom';
import { 
	SIGNUP_PAGE,
	LANDING_PAGE
} from '../../const/routes.js';

const SignInForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState(false);
	const { push } = useHistory();
	const dispatch = useDispatch();
	const disabled = !email || !password || error || processing;

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (disabled) { return; }
		setProcessing(true);
		const user = {
			user_email: email.toLowerCase(),
			user_password: password,
		};
		try {
			const response = await axios.post(
				`${DISNEY_API}login`,
				{...user}, 
				{withCredentials: true}
			)
			const { data } = response;
			dispatch(setUserLoginDetails(data));
		} catch (error) {
			setProcessing(false);
			setError(error.response?.data);		
		}
	}

	const onChangeEmail = (e) => {
		const { target: { value } } = e;
		if (error) {setError(null)}
		setEmail(value);
	}

	const onChangePassword = (e) => {
		const { target: { value } } = e;
		if (error) {setError(null)}
		setPassword(value);
	}

	const goToHome = () => {
    	push(LANDING_PAGE);
  	}

	return (
		<FormContainer>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Logo onClick={goToHome}>
        				<img src="/images/logo.svg" alt="Disney+" />
      				</Logo>
				</FormGroup>
				<FormGroup>
					<label htmlFor="emailInput">
						Enter your email
					</label>
					<Input
						id='emailInput'
						value={email}
						type="email"
						placeholder='Email adress'
						onChange={onChangeEmail}
						autoFocus={true}
					/>
					{error && 
						<CustomError
							error={error}
							type='email'
						/>}
				</FormGroup>
				<FormGroup>
					<label htmlFor='passwordInput'>
						Enter your password
					</label>
					<Input
						id='passwordInput'
						value={password}
						type="password"
						placeholder='Password'
						onChange={onChangePassword}
					/>
					{error && 
						<CustomError
							error={error}
							type='password'
						/>}					
				</FormGroup>
				<FormGroup>
					<SubmitButton 
						type='submit'
						disabled={disabled}
					>
						Sign in
					</SubmitButton>
				</FormGroup>	
				<div>
					<p>
						Do not have an account? <Link to={SIGNUP_PAGE} style={{color: '#113ccf'}}>Subscribe</Link> 
					</p>
				</div>
			</Form>
		</FormContainer>
	)
}

export default SignInForm;