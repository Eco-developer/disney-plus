import styled from "styled-components";

export const Container =  styled.div`
	display: flex;
	width: 100%;
	max-width: 700px;
	margin-top: 70px;
	margin-right: auto;
	margin-left: auto;
	padding: 1rem;

	@media (max-width: 500px) {
    	flex-direction: column;
    	padding: 1rem 0;
  	}
`;

export const ImageContainer = styled.div`
	padding: 0 1.5rem;
	div {
		position: relative;
  		height: 150px;
  		width: 150px;
  		img {
   			position: absolute;
    		width: 100%;
   	 		height: 100%;
    		top: 0;
    		bottom: 0;
    		right: 0;
    		left: 0;
    		object-fit: contain;
  		}
	}
	@media (max-width: 500px) {
    	width: 100%;
    	display: flex;
    	justify-content: center;
  	}
`;

export const DetailsContainer = styled.div`
	padding: 0 1.5rem;
	border-left: 2px solid rgba(249,249,249,0.2);
	display: flex;
	flex-direction: column;
	@media (max-width: 500px) {
    	border-left: none;
  	}
`
export const Detail = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5rem 0;
	h5 {
		font-size: 40px;
		cursor: default;
    	margin: 0;
    	font-family: monserrat;
	}
`

export const DetailTitle = styled.div`
	margin-bottom: 5px; 
	h6 {
		font-size: 20px;
		cursor: default;
    	margin: 0;
    	font-family: monserrat;
    	color: #FFF;
	}
`

export const DetailContent = styled.div`
	p {
		font-size: 18px;
		cursor: default;
    	margin: 0;
    	font-family: monserrat;
    	color: #FFF;
		opacity: 0.8;
	}
`