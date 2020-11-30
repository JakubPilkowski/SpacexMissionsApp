import { Fragment } from "react";
import { CenteredH1 } from "themes/Texts.css";
import {
  FlexWrapperRowBetween,
  FlexWrapperRowCenter,
} from "../../../themes/Wrappers.css";
import {
  RocketInfoContainer,
  RocketHeightContainer,
  RocketWeightContainer,
  RocketWeightImageContainer,
  RocketWeightImageDesc,
} from "./RocketInfo.css";
import rocketHeight from "../../../assets/rocket_height.svg";
import weight from "../../../assets/weight.svg";

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
      <FlexWrapperRowBetween>
        <RocketInfoContainer>
          <h3>{name}</h3>
          <p>
            <strong>Description:</strong> {description}
          </p>
        </RocketInfoContainer>
        <RocketHeightContainer>
          <FlexWrapperRowCenter>
            <h4>{meters}m</h4>
            <img src={rocketHeight} height="100" alt="Rocket height" />
          </FlexWrapperRowCenter>
          <h4>Height</h4>
        </RocketHeightContainer>
        <RocketWeightContainer>
          <RocketWeightImageContainer>
            <img src={weight} height="100" alt="Rocket mass" />
            <RocketWeightImageDesc>
              {Math.round(kg / 100)}t
            </RocketWeightImageDesc>
          </RocketWeightImageContainer>
          <h4>Mass</h4>
        </RocketWeightContainer>
      </FlexWrapperRowBetween>
    </Fragment>
  );
};

export default RocketInfo;
