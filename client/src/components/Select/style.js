import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 100%;
	padding: 15px 0px;
`

export const Selected = styled.div`
	border-radius: 10px;
  	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 1px solid rgba(249, 249, 249, 0.1);
    background-color: rgb(49, 52, 62);
    padding: 10px 15px;
    width: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    p {
    	margin: 0;
    	color: white;
    	font-size: 15px;
    }

    svg {
    	color: white;
    	font-size: 15px;
    	margin-left: 10px;
    	transform: ${props => props.show ? 'rotate(180deg)' : 'rotate(0deg)'};
    	transition: all 0.3s ease-in-out;
    }

    &:hover {
    	box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    	rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    	border-color: rgba(249, 249, 249, 0.8);
  	}

    @media (max-width: 500px) {
    	width: 100%;
    }
`;

export const SelectDropdown = styled.div`
	position: absolute;
	z-index: 2;
	height: ${props => props.show ? '300px' : '0px'};
	border: ${props => props.show ? '1px solid rgba(249, 249, 249, 0.8)' : '1px solid transparent'};
	box-shadow: ${props => props.show ? 'rgb(0 0 0 / 69%) 0px 26px 30px -10px' : 'none'};
	opacity: ${props => props.show ? '1' : '0'};
	background-color: rgb(49, 52, 62); 
	padding: 0;
	border-radius: 10px;
    left: 60px;
    top: 60px;
	overflow-y: scroll;
	-ms-overflow-style: none; 
  	scrollbar-width: none;
	&::-webkit-scrollbar {
  		display: none;
	}
	
	transition: all 0.3s ease-in-out;
	div {
		display: flex;
		flex-direction: column;
		height: fit-content;
	}

	@media (max-width: 500px) {
    	width: 100%;
    	left: 0;
    	right: 0;
    }
`;

export const SelectItem = styled.div`
	padding: 10px 15px;
	margin: 0;
	display: flex;
	background-color: rgb(49, 52, 62);
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	p {
    	margin: 0;
    	color: white;
    	font-size: 15px;
    	text-align: center;
    }

    &:hover {
    	background-color: white;
    	p {
    		color: #050505;
    	}
  	}

`