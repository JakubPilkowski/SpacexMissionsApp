import styled from "styled-components";
import {
  FlexWrapperColumnCenter,
  FlexWrapperRowBetween,
  FlexWrapperRowCenter,
  FlexWrapperRowSpace,
} from "../../../themes/Wrappers.css";

export const RocketInfoWrapper = styled(FlexWrapperRowBetween)`
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const RocketStatisticsWrapper = styled(FlexWrapperRowSpace)`
  flex: 1;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const RocketInfoContainer = styled.div`
  flex: 1;
`;

export const RocketInfoName = styled.h3`
  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const RocketWeightImageContainer = styled(FlexWrapperColumnCenter)`
  position: relative;
  justify-content: flex-end;
`;

export const RocketWeightImageDesc = styled.h4`
  position: absolute;
`;
