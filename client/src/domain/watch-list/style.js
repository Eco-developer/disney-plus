import styled from "styled-components";

export const Container =  styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 70px;
	padding: 1rem;
	@media (min-width: 800px) {
    	flex-direction: column;
    	padding: 1rem 3rem;
  	}
`;

export const ImageContainer = styled.div`
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
`;

export const WatchListHead = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`

export const WatchListMain = styled.div`
	flex-grow: 1;
	h5 {
		font-size: 25px;
		cursor: default;
    	margin: 0;
    	font-family: monserrat;
	}
`

export const NameContainer = styled.div`
	height: fill-available;
	margin-left: 1rem;
	padding-left: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 2px solid rgba(249,249,249,0.2);
	h5 {
		font-size: 40px;
		cursor: default;
    	font-family: monserrat;
     	margin: 20px 0;
     	@media (max-width: 500px) {
    		margin: 0;
  		}
	}
`