import styled from "styled-components";
import background from "../../assets/background.svg";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(15, 25, 59, 1), rgba(32, 44, 84, 1));
`;

export const LayoutBackgroundImage = styled.div`
  background-image: url(${background});
  background-size: 60% 60%;
  background-position: center;
  background-repeat: round;
`;

export const ContentWrapper = styled.div`
  padding-top: 80px;
`;
