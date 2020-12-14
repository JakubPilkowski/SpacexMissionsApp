import { Fragment } from "react";
import { StyledA } from "themes/Texts.css";
import { ImageLinksContainer, ImageLink } from "./AdditionalInfoLinks.css";
import youtubeIcon from "../../../../assets/youtube.svg";
import wikipediaIcon from "../../../../assets/wikipedia.png";
import redditIcon from "../../../../assets/reddit-logo.svg";
import { FlexContainer } from "themes/Wrappers.css";
import PropTypes from "prop-types";

const AdditionalInfoLinks = ({
  wikipedia,
  video,
  reddit,
  article,
  presskit,
}) => {
  return (
    <Fragment>
      <ImageLinksContainer>
        <StyledA href={wikipedia} target="_blank" rel="noreferrer">
          <ImageLink src={wikipediaIcon} alt="Wikipedia" />
        </StyledA>
        <StyledA href={video} target="_blank" rel="noreferrer">
          <ImageLink src={youtubeIcon} alt="Youtube" />
        </StyledA>
        <StyledA href={reddit} target="_blank" rel="noreferrer">
          <ImageLink src={redditIcon} alt="Reddit" />
        </StyledA>
      </ImageLinksContainer>
      <h4 style={{ margin: "6px" }}>Other links</h4>
      <FlexContainer>
        <StyledA href={article} target="_blank" rel="noreferrer">
          Article
        </StyledA>
        <StyledA href={presskit} target="_blank" rel="noreferrer">
          Press Kit
        </StyledA>
      </FlexContainer>
    </Fragment>
  );
};

AdditionalInfoLinks.propTypes = {
  wikipedia: PropTypes.string,
  video: PropTypes.string,
  reddit: PropTypes.string,
  article: PropTypes.string,
  presskit: PropTypes.string,
};

export default AdditionalInfoLinks;
