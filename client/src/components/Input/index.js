import styled from "styled-components";

const Input = ({id, value, type='text', onChange, placeholder='', highlight='', autoFocus=false}) => (
	<InputBase
		id={id}
		value={value}
		className={`form-control ${highlight}`}
		type={type}
		onChange={onChange}
		placeholder={placeholder}
		autoFocus={autoFocus}
	/>
)

const InputBase = styled.input`
	background-clip: padding-box;
	width: 100%;
	font-size: 15px;
	caret-color: rgb(2, 231, 245);
    margin: 0px;
    margin-top: 5px;
    outline: none;
    padding: 7px 10px;
    transition: all 0.1s ease 0s;
	border: 1px solid transparent;
	background-color: rgb(49, 52, 62);
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