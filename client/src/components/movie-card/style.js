import styled from "styled-components";

export const Wrap = styled.div`
	width: 100%;
  padding-top: 80%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    div {
      height: 100%;
    }
  }
`

export const Image = styled.img`
  inset: 0px;
  display: block;
  height: 100%;
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 10px;
`

export const DetailsContainer = styled.div`
  position: absolute;
  background-color: rgba(5, 5, 5, 0.75);
  width: 100%;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  height: 0%;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow-y: scroll;
  -ms-overflow-style: none; 
    scrollbar-width: none;
  &::-webkit-scrollbar {
      display: none;
  }

  h6 {
    margin: 0;
    padding: 15px;
    padding-bottom: 8px;
    font-size: 15px;
    color: #FFF;
  }
`

export const Stats = styled.div`
  margin-bottom: 20px;
  height: fit-content !important;
  position: relative;
  z-index: inherit;
`

export const Stat = styled.div`
  display: flex;
  padding: 2px 15px;
  margin: 0;
  height: fit-content !important;
  svg {
    font-size: 15px;
    color: #FFF;
    margin-right: 10px;
  }
  p {
    font-size: 15px;
    color: #FFF;
    opacity: 0.8;
    margin: 0;
  }
`