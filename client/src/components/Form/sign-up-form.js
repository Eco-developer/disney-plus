import Form from './index.js';
import Input from '../Input/index.js';
import CustomError from '../Error/index.js';
import axios from 'axios';
import DISNEY_API from '../../const/disneyApi.js';
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
import { 
	emailPattern, 
	passwordPattern 
} from '../../const/patterns.js';

const SignUpForm = () => {
	const { push } = useHistory();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepit, setPasswordRepit] = useState('');
	const [phone, setPhone] = useState('');
	const [errorSubmit, setErrorSubmit] = useState(null);
	const [error, setErrors] = useState({});
	const [success, setSuccess] = useState({});
	const [processing, setProcessing] = useState(false);
	const emailValidator = new RegExp(emailPattern);
	const passwordValidator = new RegExp(passwordPattern);

	const valid = name && email && emailValidator.test(email) && password && passwordValidator.test(password) && passwordRepit && password === passwordRepit;

	const handleSubmit = async (e) => {
		e.preventDefault();
		if ((!valid || errorSubmit || processing)) {
			return;
		}
		setProcessing(true);
		const user = {
			user_name: name,
			user_email: email.toLowerCase(),
			user_password: password,
			phone_number: phone,
		};
		try {
			const response = await axios.post(
				`${DISNEY_API}sign-up`,
				{...user}, 
			)	

			if (response.data) {
				const responseLogin = await axios.post(
				`${DISNEY_API}login`,
					{...user}, 
					{withCredentials: true}
				)
			}
		} catch (error) {
			setProcessing(false)
			setErrorSubmit(error.response?.data);
		}
	};

	const validateInput = (condition, empty, target) => {
		if (empty) {
			setSuccess((prevState) => ({...prevState, [target]: false}))
			setErrors((prevState) => ({...prevState, [target]: false}))
			return;
		}
		if (!condition) {
			setErrors((prevState) => ({...prevState, [target]: true}))
			setSuccess((prevState) => ({...prevState, [target]: false}))
		} else {
			setErrors((prevState) => ({...prevState, [target]: false}))
			setSuccess((prevState) => ({...prevState, [target]: true}))
		}
	};

	const onChangeEmail = (e) => {
		const { 
			target: { 
				value,
				id 
			} 
		} = e;
		if (errorSubmit) {setErrorSubmit(null)}
		setEmail(value);
		validateInput(emailValidator.test(value), !value, id);
		if (errorSubmit) {
			setErrorSubmit(null)
		}
	};

	const onChangePassword = (e) => {
		const { 
			target: { 
				value,
				id 
			} 
		} = e;		
		setPassword(value);
		validateInput(passwordValidator.test(value), !value, id);
	};

	const onChangePasswordRepit = (e) => {
		const { 
			target: { 
				value,
				id 
			} 
		} = e;
		setPasswordRepit(value);
		validateInput(password === value, !value, id);
	};

	const onChangePhone = (e) => {
		const { target: { value } } = e;
		setPhone(value);
	};

	const onChangeName = (e) => {
		const { target: { value } } = e;
		setName(value);
	};

	const goToHome = () => {
    	push(LANDING_PAGE);
  	};

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
						Full name <Important>*</Important>
					</h5>
					<Input
						id='name'
						value={name}
						type="text"
						placeholder='Full name'
						onChange={onChangeName}
					/>					
				</FormGroup>
				<FormGroup>
					<h5>
						Enter a valid email adress <Important>*</Important>
					</h5>
					<Input
						id='email'
						value={email}
						success={email ? success?.email : null}
						error={email ? error?.email : null}
						type="email"
						placeholder='Email adress'
						onChange={onChangeEmail}
					/>
				</FormGroup>
				<FormGroup>
					<h5>
						Enter a valid Password <Important>*: at least 8 characters long, one uppercase, one lowercase, one symbol.</Important>
					</h5>
					<Input
						id='password'
						value={password}
						success={password ? success?.password : null}
						error={password ? error?.password : null}
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
						id='passwordRepit'
						value={passwordRepit}
						success={passwordRepit ? success?.passwordRepit : null}
						error={passwordRepit ? error?.passwordRepit : null}
						type="password"
						placeholder='Repit password'
						onChange={onChangePasswordRepit}
					/>					
				</FormGroup>
				<FormGroup>
					<h5>
						Phone number
					</h5>
					<Input
						id='phoneInput'
						value={phone}
						type="text"
						placeholder='Phone'
						onChange={onChangePhone}
					/>					
				</FormGroup>
				{errorSubmit && 
						<CustomError
							error={errorSubmit}
							type='email'
						/>}
				<FormGroup>
					<SubmitButton 
						type='submit'
						disabled={(!valid || errorSubmit || processing) ? true : false}
						onClick={handleSubmit}
					>
						Create account
					</SubmitButton>
				</FormGroup>
			</Form>
		</FormContainer>
	)
}

export default SignUpForm;