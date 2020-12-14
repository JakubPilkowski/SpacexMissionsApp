import { Fragment } from "react";
import { CenteredH1, CenteredH2 } from "themes/Texts.css";
import {
  FlexWrapperRowSpace,
  FlexWrapperColumnCenter,
} from "../../../themes/Wrappers.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { PhotosWrapper } from "./AdditionalInfo.css";

import PropTypes from "prop-types";
import AdditionalInfoLinks from "./AdditionalInfoLinks/AdditionalInfoLinks";

const AdditionalInfo = ({ links: { launch_images, ...infoLinks } }) => {
  return (
    <Fragment>
      <CenteredH1>Additional info</CenteredH1>
      <FlexWrapperRowSpace>
        <FlexWrapperColumnCenter>
          <CenteredH2>Sources</CenteredH2>
          <AdditionalInfoLinks {...infoLinks} />
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
    launch_images: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default AdditionalInfo;
