import styled from "styled-components";

export const HamburgerMenu =  styled.div`
  height: 70px;
  width: 40px;
  margin-left: auto;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    cursor:pointer;
    font-size: 40px;
    color: #FFF;
  }

  @media (min-width: 800px) {
    display: none;
  }
`

export const HeaderItemsBase = styled.ul`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  list-style: none;

  @media (max-width: 800px) {
    position: fixed;
    overflow: hidden;
    top: 70px;
    height: ${props => props.open ? 'calc(100vh - 70px)' : '0px' };
    opacity: ${props => props.open ? '1' : '0' };
    margin: 0;
    right: 0;
    left: 0;
    background-color: #040714;
    flex-direction: column;
    justify-content: center;
    transition: all 0.4s linear;
  } 
`;

export const Item = styled.li`
  @media (max-width: 800px) {
    padding: 15px 0;
  }

  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  opacity: ${props => props.current ? '1' : '0.7' };

  svg {
    font-size: 20px;
    color: white;
    z-index: auto;
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 15px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;
    margin-left: 5px;
    &:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      content: "";
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }

  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`