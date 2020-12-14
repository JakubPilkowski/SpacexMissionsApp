import { Fragment } from "react";
import { CenteredH1, CenteredH2, StyledA } from "themes/Texts.css";
import youtube from "../../../assets/youtube.svg";
import wikipediaIcon from "../../../assets/wikipedia.png";
import redditIcon from "../../../assets/reddit-logo.svg";
import {
  FlexContainer,
  FlexWrapperRowSpace,
  FlexWrapperColumnCenter,
} from "../../../themes/Wrappers.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  LinkImage,
  LinkImagesContainer,
  PhotosWrapper,
} from "./AdditionalInfo.css";

import PropTypes from "prop-types";

const AdditionalInfo = ({
  links: { video, article, wikipedia, reddit, presskit, launch_images },
}) => {
  return (
    <Fragment>
      <CenteredH1>Additional info</CenteredH1>
      <FlexWrapperRowSpace>
        <FlexWrapperColumnCenter>
          <CenteredH2>Sources</CenteredH2>
          <LinkImagesContainer>
            <StyledA href={wikipedia} target="_blank" rel="noreferrer">
              <LinkImage src={wikipediaIcon} alt="Wikipedia" />
            </StyledA>
            <StyledA href={video} target="_blank" rel="noreferrer">
              <LinkImage src={youtube} alt="Youtube" />
            </StyledA>
            <StyledA href={reddit} target="_blank" rel="noreferrer">
              <LinkImage src={redditIcon} alt="Icon" />
            </StyledA>
          </LinkImagesContainer>
          <h4 style={{ margin: "6px" }}>Other links</h4>
          <FlexContainer>
            <StyledA href={article} target="_blank" rel="noreferrer">
              Article
            </StyledA>
            <StyledA href={presskit} target="_blank" rel="noreferrer">
              Press Kit
            </StyledA>
          </FlexContainer>
        </FlexWrapperColumnCenter>
        <PhotosWrapper>
          <CenteredH2>Photos</CenteredH2>
          <Carousel
            autoPlay
            infiniteLoop
            interval={2000}
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            renderThumbs={false}
            width={200}
          >
            {launch_images.map((image, index) => (
              <img
                key={index}
                src={image}
                height="200"
                width="250"
                alt={`Rocket launch ${index + 1}`}
              />
            ))}
          </Carousel>
        </PhotosWrapper>
      </FlexWrapperRowSpace>
    </Fragment>
  );
};

AdditionalInfo.propTypes = {
  links: PropTypes.shape({
    video: PropTypes.string,
    article: PropTypes.string,
    wikipedia: PropTypes.string,
    reddit: PropTypes.string,
    presskit: PropTypes.string,
    launch_images: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default AdditionalInfo;
