import styled from "styled-components";

export const PageBase =  styled.div`
	width: 28px;
	height: 28px;
  margin: 2px;
	border-radius: 50%;
	padding: 5px;
	display: flex;
	justify-content: center;
	align-items: center; 
	color: #FFF;
	font-size: 15px;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 2px solid;
  border-color: ${props => props.active ? 'rgba(249, 249, 249, 0.8)' : 'rgba(249, 249, 249, 0.1)'};
  background-color: #040714;

  svg {
    font-size: 15px;
  };

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
	}

  @media (min-width: 700px) {
    width: 40px;
    height: 40px;
    margin: 10px;
    font-size: 20px;
    svg {
      font-size: 20px;
    };
  }
`