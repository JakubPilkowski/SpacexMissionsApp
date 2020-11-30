import styled from "styled-components";
import { FlexWrapperColumnCenter } from "../../../themes/Wrappers.css";

export const RocketInfoContainer = styled.div`
  flex: 2;
`;

export const RocketHeightContainer = styled(FlexWrapperColumnCenter)`
  flex: 1.5;
`;

export const RocketWeightContainer = styled(FlexWrapperColumnCenter)`
  flex: 1;
`;

export const RocketWeightImageContainer = styled(FlexWrapperColumnCenter)`
  position: relative;
  justify-content: flex-end;
`;

export const RocketWeightImageDesc = styled.h4`
  position: absolute;
`;
