import styled from "styled-components";

export const InFavouritesToggleView = styled.h4`
  margin: 0px;
  border-radius: 6px;
  background-color: ${(props) => (props.isFavourite ? "#ff8c00" : "red")};
  padding: 6px;

  @media (max-width: 500px) {
    margin: auto;
  }
`;
