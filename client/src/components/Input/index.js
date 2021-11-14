import styled from "styled-components";

const Input = ({id, value, type='text', onChange, placeholder='', autoFocus=false, error=null, success=null}) => (
	<InputBase
		id={id}
		value={value}
		type={type}
		onChange={onChange}
		placeholder={placeholder}
		autoFocus={autoFocus}
		error={error}
		success={success}
	/>
)

const InputBase = styled.input`
	background-clip: padding-box;
	width: 100%;
	font-size: 15px;
	caret-color: rgb(2, 231, 245);
    margin: 0px;
    margin-top: 10px;
    outline: none;
    padding: 7px 10px;
    transition: all 0.1s ease 0s;
	border: 1px solid transparent;
	border-color: ${props => props.error ? 'rgb(255, 51, 51)' : props.success ? 'rgb(75, 181, 67)' : 'transparent'};
	background-color: rgb(49, 52, 62);
	box-shadow: ${props => props.error ? '0 0 0.3rem rgba(255, 51, 51, 0.5)' : props.success ? '0 0 0.3rem rgba(75, 181, 67, 0.5)' : 'none'};
	backdrop-filter: blur(50px);
	color: #FFF;
	border-radius: 5px;
	&::placeholder {
		color: grey;
	}
	&:focus {
    	border-color: rgba(249, 249, 249, 0.3);
  	}
`
export default Input;