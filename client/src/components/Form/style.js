import styled from "styled-components";
import { Button } from '../../global-styles/index.js';

export const FormContainer = styled.div`
	width: 400px;
	padding: 8px;
	form {
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 500px) {
    	width: 100%;
  	}
`;

export const Logo = styled.div`
  	padding: 0;
 	width: 100%;
 	display: flex;
 	place-items: center;
  	img {
    	height: 80px;
    	object-fit: contain;
    	cursor: pointer;
  	}
`;

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin: 7px 0;	
`;

export const SubmitButton = styled(Button)`
	background-color: #113ccf;
	border: none;
	margin-right: 0.4em;
	width: 100%;
	&:hover {
    	background-color: #0483ee;
    	color: #FFF;
  	}
`;

export const Important = styled.small`
	color: red;
`;