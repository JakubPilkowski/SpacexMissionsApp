import styled from "styled-components";

export const FlexWrapperRow = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexWrapperRowCenter = styled(FlexWrapperRow)`
  justify-content: center;
`;

export const FlexWrapperRowBetween = styled(FlexWrapperRow)`
  justify-content: space-between;
`;

export const FlexWrapperRowSpace = styled(FlexWrapperRow)`
  justify-content: space-around;
`;

export const FlexWrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexWrapperColumnCenter = styled(FlexWrapperColumn)`
  align-items: center;
`;

export const FlexContainer = styled.div`
  margin: 6px;
  padding: 6px;

  @media (max-width: 500px) {
    margin: 2px;
    padding: 2px;
  }
`;

export const FlexTextCenterContainer = styled(FlexContainer)`
  text-align: center;
`;
