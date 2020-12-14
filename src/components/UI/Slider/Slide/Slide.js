import { SlideWrapper } from "./Slide.css";
import PropTypes from "prop-types";

const Slide = ({ index, activeIndex, children }) => (
  <SlideWrapper className={index === activeIndex ? "active" : "inactive"}>
    {children}
  </SlideWrapper>
);

Slide.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default Slide;
