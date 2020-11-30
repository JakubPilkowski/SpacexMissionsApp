import Card from "@material-ui/core/Card";
import styled from "styled-components";

export const MissionCard = styled(Card)`
  margin-bottom: 24px;
  width: 50%;
  max-width: 50%;
  &: hover {
    transform: scale(1.02);
    -webkit-transition: 500ms;
  }
`;

export const MissionCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MissionCardInFavourites = styled.h4`
  margin: 0px;
  border-radius: 6px;
  background-color: ${(props) => (props.isFavourite ? "#ff8c00" : "red")};
  padding: 6px;
`;
