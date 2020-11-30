import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: white;
  margin: 75px;

  @media (max-width: 500px) {
    margin: 30px;
  }
`;

export const CenteredH1 = styled.h1`
  text-align: center;
`;

export const CenteredH2 = styled.h2`
  text-align: center;
`;

export const CenteredSpacingSmH1 = styled(CenteredH1)`
  margin: 3px;
`;

export const CenteredSpacingSmH2 = styled(CenteredH2)`
  margin: 3px;
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
