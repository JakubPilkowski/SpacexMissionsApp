import styled from "styled-components";
import { FlexContainer } from "themes/Wrappers.css";

export const ImageLinksContainer = styled(FlexContainer)`
  @media (max-width: 500px) {
    margin: auto;
  }
`;

export const ImageLink = styled.img`
  height: 50px;
  @media (max-width: 500px) {
    height: 40px;
  }
`;
