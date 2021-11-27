import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: grid;
	place-items: center;
	z-index: 1000;
	background-color: #050505;
	div {
		display: flex;
		flex-direction: column; 
		align-items: center;
		h1 {
			font-size: 100px;
			margin: 0;
			margin-bottom: 10px;
			cursor: default;
			font-family: monserrat;
			@media (min-width: 800px) {
    			font-size: 200px;
  			}
		}
		h6 {
			font-size: 20px;
			margin: 0;
			cursor: default;
			font-family: monserrat;
			@media (min-width: 800px) {
    			font-size: 30px;
  			}
		}
	}
`;