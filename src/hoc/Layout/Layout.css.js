import styled from "styled-components";
import background from "../../assets/background.svg";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(15, 25, 59, 0.85), rgba(32, 44, 84, 0.85));
  background-attachment: fixed;
`;

export const LayoutBackgroundImage = styled.div`
  min-height: 100vh;
  background-image: url(${background});
  background-size: 60% 60%;
  background-position: center;
  background-attachment: fixed;
  background-repeat: round;

  @media (max-width: 500px) {
    background-size: 50%;
  }
`;

export const ContentWrapper = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  @media (max-width: 500px) {
    padding-top: 72px;
  }
`;
