import styled from "styled-components";
import { FlexContainer, FlexWrapperColumnCenter } from "themes/Wrappers.css";

export const PhotosWrapper = styled(FlexWrapperColumnCenter)`
  @media (max-width: 500px) {
    display: none;
  }
`;
