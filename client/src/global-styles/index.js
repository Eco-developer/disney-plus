import styled from "styled-components";

export const ContainerMain = styled.div`
	height: 100vh;
	width: 100%;
	overflow-y: scroll;
	-ms-overflow-style: none; 
  	scrollbar-width: none;
	&::-webkit-scrollbar {
  		display: none;
	}
`;

export const CatalogueLoyout = styled(ContainerMain)`
  position: relative;
  padding: 0 calc(3.5vw + 5px);
  background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
  
`;


export const Button = styled.button`
	background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  color: #FFF;
  cursor: pointer;
 	transition: all 0.4s ease 0s;

  &:hover {
   	background-color: #f9f9f9;
   	color: #000;
    border-color: transparent;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const ContainerCenter = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`;