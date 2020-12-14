import React, { useState } from "react";
import Slide from "./Slide/Slide";
import {
  SliderDot,
  SliderWrapper,
  SliderBottomView,
  SliderButton,
} from "./Slider.css";

import PropTypes from "prop-types";
import SliderItem from "./SliderItem";

const Slider = ({ length, children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevSlide = () => {
    let index = activeIndex;
    index = index < 1 ? length - 1 : (index -= 1);
    setActiveIndex(index);
  };
  const goToNextSlide = () => {
    let index = activeIndex;
    index = index === length - 1 ? 0 : (index += 1);
    setActiveIndex(index);
  };

  const goToSlide = (id) => {
    console.log("dot click");
    setActiveIndex(id);
  };
  let dotsContent = [];

  for (let i = 0; i < length; i++) {
    dotsContent.push(
      <SliderDot
        key={i}
        className={activeIndex === i ? "active" : "inactive"}
        onClick={() => goToSlide(i)}
      />
    );
  }

  return (
    <SliderWrapper>
      {children.map((child, index) => (
        <Slide key={index} activeIndex={activeIndex} index={index}>
          {child}
        </Slide>
      ))}
      <SliderBottomView>
        <SliderButton color="primary" onClick={goToPrevSlide}>
          Prev
        </SliderButton>
        <div style={{ display: "flex" }}>{dotsContent}</div>
        <SliderButton color="primary" onClick={goToNextSlide}>
          Next
        </SliderButton>
      </SliderBottomView>
    </SliderWrapper>
  );
};

Slider.propTypes = {
  length: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Slider;
