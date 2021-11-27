import styled from "styled-components";

export const Container = styled.span`
	background-color: ${props => props.active ? '#FFF' : 'rgba(5, 5, 5, 0.7)'};
	width: 30px;
	height: 30px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	svg {
		font-size: 15px;
		color: ${props => props.active ? '#050505' : '#FFF'};
	}
`;