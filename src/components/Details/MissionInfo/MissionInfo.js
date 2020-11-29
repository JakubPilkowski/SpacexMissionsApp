import { Fragment } from "react";
import { CenteredH1 } from "utils/Texts.css";
import {
  FlexWrapperRowBetween,
  FlexContainer,
  FlexTextCenterContainer,
} from "../../../utils/Wrappers.css";

const MissionInfo = ({
  launch: {
    details,
    name,
    launch_date_local,
    links: { image },
  },
}) => {
  return (
    <Fragment>
      <CenteredH1>Mission details</CenteredH1>
      <FlexWrapperRowBetween>
        <FlexContainer>
          <p>{details ? details : "No Details"}</p>
          <p>Launch date: {launch_date_local.slice(0, 10)}</p>
        </FlexContainer>
        <FlexTextCenterContainer>
          <img src={image} width="125" height="125" alt={`${name} mission`} />
          <h4>{name}</h4>
        </FlexTextCenterContainer>
      </FlexWrapperRowBetween>
    </Fragment>
  );
};

export default MissionInfo;
