import Form from './index.js';
import Input from '../Input/index.js';
import CustomError from '../Error/index.js';
import { 
	FormContainer,
	FormGroup,
	SubmitButton,
	Logo,
	Important
} from './style.js';
import { useState } from 'react';
import { 
	Link,
	useHistory 
} from 'react-router-dom';
import { LANDING_PAGE } from '../../const/routes.js';

const SignUpForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepit, setPasswordRepit] = useState('');
	const [phone, setPhone] = useState('');
	const [errorSubmit, setErrorSubmit] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = {email, password};
		try {
			/*const response = await axios.post(
				`${FACEBOOK_API}login`,
				{...user}, 
				{withCredentials: true}
			)
			
			if (response.data) {
			}*/
		} catch (error) {
			setError(error.response?.data);		
		}
	}

	const onChangeEmail = (e) => {
		const { target: { value } } = e;
		if (error) {setErrorSubmit(null)}
		setEmail(value);
	}

	const onChangePassword = (e) => {
		const { target: { value } } = e;
		setPassword(value);
	}

	const onChangePasswordRepit = (e) => {
		const { target: { value } } = e;
		setPasswordRepit(value);
	}

	const onChangePhone = (e) => {
		const { target: { value } } = e;
		setPhone(value);
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
					<h5>
						Email <Important>*</Important>
					</h5>
					<Input
						id='emailInput'
						value={email}
						type="email"
						placeholder='Email adress'
						onChange={onChangeEmail}
					/>
					{errorSubmit && 
						<CustomError
							error={errorSubmit}
							type='email'
						/>}
				</FormGroup>
				<FormGroup>
					<h5>
						Enter a valid Password <Important>*: must contain at least 8 characters, one uppercase, one lowercase, one simbol</Important>
					</h5>
					<Input
						id='passwordInput'
						value={password}
						type="password"
						placeholder='Password'
						onChange={onChangePassword}
					/>					
				</FormGroup>
				<FormGroup>
					<h5>
						Repit Password
					</h5>
					<Input
						id='passwordRepitInput'
						value={passwordRepit}
						type="password"
						placeholder='Pepit password'
						onChange={onChangePasswordRepit}
					/>					
				</FormGroup>
				<FormGroup>
					<h5>
						Phone number
					</h5>
					<Input
						id='phoneInput'
						value={passwordRepit}
						type="text"
						placeholder='Phone'
						onChange={onChangePhone}
					/>					
				</FormGroup>
				<FormGroup>
					<SubmitButton 
						type='submit'
						disabled={!email || !password || error}
					>
						Sign in
					</SubmitButton>
				</FormGroup>
			</Form>
		</FormContainer>
	)
}

export default SignUpForm;