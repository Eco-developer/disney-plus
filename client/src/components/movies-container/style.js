import styled from "styled-components";

export const Container = styled.div`
	padding: 10px 0px;
	width: 100%;
	display: flex;
	flex-direction: column; 
`;

export const Content = styled.div`
  display: grid;
  gap: 20px;

  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 1200px) {
  	grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 800px) {
  	grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;