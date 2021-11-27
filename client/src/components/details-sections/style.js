import styled from "styled-components";
import { BsFillPlayFill } from 'react-icons/bs';

export const BackgroundImage = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  margin-top: 40vh;
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  p {
    cursor: default;
    margin: 0;
    font-family: monserrat;
  }
  div {
    width: 40%;
    min-width: 300px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    @media (max-width: 500px) {
      width: 100%;
      min-width: 200px;
      padding: 20px;
      position: relative;
      &:before {
        position: absolute;
        backdrop-filter: blur(2px) saturate(40%) contrast(80%) brightness(90%);
        content: '';
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
      }
      span {
        z-index: 2; 
      }
    }
  }
  @media (max-width: 500px) {
    padding: 0;
    margin-top: 60vh;
  }
`;

export const Title = styled.span`
  margin-bottom: 15px;
  p {
    font-size: 30px;
  }
`;
export const Genres = styled.span`
  margin-bottom: 5px;
`;

export const Overview = styled.span`
  margin-bottom: 5px;
  p {
    font-size: 15px;
    color: #FFF;
  }
`;

export const Buttons = styled.span`
  display: flex;
  align-items: center; 
  margin-bottom: 15px;
  span {
    margin-left: 15px !important;
  }
`;

export const Play = styled(BsFillPlayFill)`
  color: #FFF;
  font-size: 15px;
  margin-left: 5px;
  transition: all 0.4s ease 0s;
`;

export const MoreContainer = styled.div`
  width: 100%;
  padding: 0 5rem;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  p {
    cursor: default;
    margin: 0;
    font-size: 18px;
    font-family: monserrat;
    color: #FFF;
  }
  h6 {
    cursor: default;
    margin: 0;
    margin-bottom: 10px;
    font-size: 24px;
    font-family: monserrat;
    color: #FFF;
  }

  a {
    all: unset;
    color: rgba(0, 0, 255, 0.7);
    cursor: pointer;
  }

  @media (max-width: 500px) {
      width: 100%;
      padding: 0 20px;
      position: relative;
      &:before {
        position: absolute;
        backdrop-filter: blur(2px) saturate(40%) contrast(80%) brightness(90%);
        content: '';
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
      }
      span {
        z-index: 2; 
      }
    }
`;

export const MoreInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 2px solid rgba(249, 249, 249, 0.2);
`;

export const TextContainer = styled.span`
  width: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
`;

export const Footerbase = styled.footer`
  margin: 0;
  margin-top: auto;
  width: 100%;
  padding: 20px 0;
  background-color: #040714;
  p {
    cursor: default;
    margin: 0;
    font-size: 20px;
    font-family: monserrat;
    color: #FFF;
  }
  span {
    width: 100%;
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 120px;
  margin: 10px 0;
  width: 100%;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    object-fit: contain;
  }
`