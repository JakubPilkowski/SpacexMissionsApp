import { Fragment } from "react";
import { CenteredH1 } from "utils/Texts.css";
import { FlexWrapperRowBetween } from "../../../utils/Wrappers.css";
import {
  RocketInfoContainer,
  RocketHeightContainer,
  RocketWeightContainer,
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
          <p>Description: {description}</p>
        </RocketInfoContainer>
        <RocketHeightContainer>
          <h3>{meters}m</h3>
          <img src={rocketHeight} height="75" alt="Rocket height" />
        </RocketHeightContainer>
        <RocketWeightContainer>
          <img src={weight} height="50" alt="Rocket mass" />
          <h4>{Math.round(kg / 100)}t</h4>
        </RocketWeightContainer>
      </FlexWrapperRowBetween>
    </Fragment>
  );
};

export default RocketInfo;
