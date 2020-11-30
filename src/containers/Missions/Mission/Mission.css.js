import Card from "@material-ui/core/Card";
import styled from "styled-components";
import { FlexWrapperRowBetween } from "themes/Wrappers.css";

export const MissionCard = styled(Card)`
  margin-bottom: 24px;
  width: 50%;
  max-width: 50%;
  &: hover {
    transform: scale(1.02);
    -webkit-transition: 500ms;
  }

  @media (max-width: 500px) {
    width: 90%;
    max-width: 90%;
  }
`;

export const MissionCardHeader = styled(FlexWrapperRowBetween)`
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const MissionCardImage = styled.img`
  height: 100px;
  @media (max-width: 500px) {
    order: 1;
    height: 75px;
    margin-bottom: 12px;
  }
`;

export const MissionCardTitle = styled.h1`
  @media (max-width: 500) {
    order: 2;
  }
`;

export const MissionCardInFavourites = styled.h4`
  margin: 0px;
  border-radius: 6px;
  background-color: ${(props) => (props.isFavourite ? "#ff8c00" : "red")};
  padding: 6px;

  @media (max-width: 500px) {
    margin: auto;
  }
`;
