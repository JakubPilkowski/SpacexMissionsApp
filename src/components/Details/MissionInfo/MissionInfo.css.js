import styled from "styled-components";
import { FlexWrapperRowBetween, FlexContainer } from "themes/Wrappers.css";

export const MissionInfoWrapper = styled(FlexWrapperRowBetween)`
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const DetailsContent = styled(FlexContainer)`
  @media (max-width: 500px) {
    order: 2;
    margin: 0;
    padding: 0;
  }
`;

export const TitleContent = styled(FlexContainer)`
  @media (max-width: 500px) {
    order: 1;
    margin: 0;
    padding: 0;
  }
`;

export const TitleImage = styled.img`
  height: 125px;
  @media (max-width: 500px) {
    height: 100px;
  }
`;

export const TitleName = styled.h4`
  @media (max-width: 500px) {
    margin: 0;
    text-align: center;
  }
`;
