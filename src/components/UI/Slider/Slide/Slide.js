import { SlideWrapper } from "./Slide.css";

const Slide = ({ index, activeIndex, children }) => (
  <SlideWrapper
    className={index === activeIndex ? "active" : "inactive"}
    key={index}
  >
    {children}
  </SlideWrapper>
);
export default Slide;
