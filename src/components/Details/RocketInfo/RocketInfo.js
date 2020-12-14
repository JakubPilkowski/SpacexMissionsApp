import { Fragment } from "react";
import { CenteredH1 } from "themes/Texts.css";
import {
  FlexWrapperColumnCenter,
  FlexWrapperRowCenter,
} from "../../../themes/Wrappers.css";
import {
  RocketInfoContainer,
  RocketWeightImageContainer,
  RocketWeightImageDesc,
  RocketInfoWrapper,
  RocketStatisticsWrapper,
  RocketInfoName,
} from "./RocketInfo.css";
import rocketHeight from "../../../assets/rocket_height.svg";
import weight from "../../../assets/weight.svg";
import PropTypes from "prop-types";

const RocketInfo = ({
  details: {
    name,
    description,
    height: { meters },
    mass: { kg },
  },
}) => {
  return (
    <Fragment>
      <CenteredH1>Rocket info</CenteredH1>
      <RocketInfoWrapper>
        <RocketInfoContainer>
          <RocketInfoName>{name}</RocketInfoName>
          <p>
            <strong>Description:</strong> {description}
          </p>
        </RocketInfoContainer>
        <RocketStatisticsWrapper>
          <FlexWrapperColumnCenter>
            <FlexWrapperRowCenter>
              <h4>{meters}m</h4>
              <img src={rocketHeight} height="100" alt="Rocket height" />
            </FlexWrapperRowCenter>
            <h4>Height</h4>
          </FlexWrapperColumnCenter>
          <FlexWrapperColumnCenter>
            <RocketWeightImageContainer>
              <img src={weight} height="100" alt="Rocket mass" />
              <RocketWeightImageDesc>
                {Math.round(kg / 100)}t
              </RocketWeightImageDesc>
            </RocketWeightImageContainer>
            <h4>Mass</h4>
          </FlexWrapperColumnCenter>
        </RocketStatisticsWrapper>
      </RocketInfoWrapper>
    </Fragment>
  );
};

RocketInfo.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    height: PropTypes.shape({
      meters: PropTypes.number,
    }),
    mass: PropTypes.shape({
      kg: PropTypes.number,
    }),
  }),
};

export default RocketInfo;
