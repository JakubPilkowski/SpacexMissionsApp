import styled from "styled-components";
import { FlexContainer, FlexWrapperColumnCenter } from "themes/Wrappers.css";

export const LinkImagesContainer = styled(FlexContainer)`
  @media (max-width: 500px) {
    margin: auto;
  }
`;

export const LinkImage = styled.img`
  height: 50px;
  @media (max-width: 500px) {
    height: 40px;
  }
`;

export const PhotosWrapper = styled(FlexWrapperColumnCenter)`
  @media (max-width: 500px) {
    display: none;
  }
`;
