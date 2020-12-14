import { Fragment } from "react";
import { CenteredH1 } from "themes/Texts.css";
import {
  DetailsContent,
  MissionInfoWrapper,
  TitleContent,
  TitleImage,
  TitleName,
} from "./MissionInfo.css";

import PropTypes from "prop-types";

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
      <MissionInfoWrapper>
        <DetailsContent>
          <p>{details ? details : "No Details"}</p>
          <p>Launch date: {launch_date_local.slice(0, 10)}</p>
        </DetailsContent>
        <TitleContent>
          <TitleImage src={image} alt={`${name} mission`} />
          <TitleName>{name}</TitleName>
        </TitleContent>
      </MissionInfoWrapper>
    </Fragment>
  );
};

MissionInfo.propTypes = {
  launch: PropTypes.shape({
    details: PropTypes.string,
    name: PropTypes.string,
    launch_date_local: PropTypes.string,
    links: PropTypes.shape({
      image: PropTypes.string,
    }),
  }).isRequired,
};

export default MissionInfo;
