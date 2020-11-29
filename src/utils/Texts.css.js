import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: white;
  margin: "75px";
`;

export const CenteredH1 = styled.h1`
  text-align: center;
`;

export const CenteredH2 = styled.h2`
  text-align: center;
`;

export const StyledA = styled.a`
  margin: 0 12px;
  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: #ff8c00;
  }
`;
