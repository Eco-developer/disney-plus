import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	position: fixed;
	z-index: 5;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.4);
	place-items: center;
`;

export const InnerContainer = styled.div`
	width: 80%;
	height: 60vh;
	position: relative;
	border-radius: 10px;
  	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	border: 3px solid rgba(249, 249, 249, 0.1);
	overflow: hidden;
	iframe {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
`

export const Close = styled.div`
	position: fixed;
	top: 20px;
	right: 20px;
	background-color: rgba(5, 5, 5, 0.7);
	width: 30px;
	height: 30px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	svg {
		font-size: 30px;
		color: #FFF;
	}
`