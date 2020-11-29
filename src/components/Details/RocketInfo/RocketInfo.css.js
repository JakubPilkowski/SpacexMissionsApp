import styled from "styled-components";
import {
  FlexWrapperColumnCenter,
  FlexWrapperRowCenter,
} from "../../../utils/Wrappers.css";

export const RocketInfoContainer = styled.div`
  flex: 2;
`;

export const RocketHeightContainer = styled(FlexWrapperRowCenter)`
  flex: 1.5;
`;

export const RocketWeightContainer = styled(FlexWrapperColumnCenter)`
  flex: 1;
`;
