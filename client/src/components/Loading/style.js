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
	}
`

export const Logo = styled.div`
  height: 100px;
  width: 150px;
  position: relative;
  img {
    position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	object-fit: fill;
  }
`;