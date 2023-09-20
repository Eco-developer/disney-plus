import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Carousel = styled(Slider)`
  margin-top: 90px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
    overflow-x: hidden;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }

  @media (max-width: 500px) {
    .slick-dots li {
        margin: 0;
    }
  }
`;

export const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  div {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    margin: 0 4px;
    overflow: hidden;
    padding-top: 35%;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      object-fit: fill;
    }
  }

  @media (min-width: 800px) {
    div {
      padding-top: 30%;
    }
  }
`;

export const Title = styled.span`
  position: absolute;
  z-index: 2;
  background-color: rgba(5, 5, 5, 0.7);
  bottom: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  p {
    margin: 0;
    font-size: 12px;
    color: #FFF;
    text-align: center;
  }
  @media (min-width: 500px) {
    padding: 6px;
    p {
      font-size: 20px;
    }
  }
`