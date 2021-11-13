import styled from "styled-components";
import { Button } from '../../global-styles/index.js';

export const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

export const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

export const ContainerInner = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerInnerLogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

export const SignUp = styled(Button)`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #113ccf;
  margin-bottom: 12px;
  width: 100%;
  font-size: 18px;
  border: 1px solid transparent;

  &:hover {
    background-color: #0483ee;
    color: #f9f9f9;
  }
`;

export const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 20px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const ContainerInnerLogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;