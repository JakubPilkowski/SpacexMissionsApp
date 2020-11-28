import React, { useState } from "react";
import Slide from "./Slide/Slide";
import { SliderWrapper } from "./Slider.css";

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevSlide = () => {
    let index = activeIndex;
    index = index < 1 ? props.length - 1 : (index -= 1);
    setActiveIndex(index);
  };
  const goToNextSlide = () => {
    let index = activeIndex;
    index = index === props.length - 1 ? 0 : (index += 1);
    setActiveIndex(index);
  };

  return (
    <SliderWrapper>
      <div className="slider-items">
        <button onClick={goToPrevSlide}>Prev</button>
        <div className="slider-text">
          {props.children.map((child, index) => (
            <Slide key={index} activeIndex={activeIndex} index={index}>
              {child}
            </Slide>
          ))}
        </div>
        <button onClick={goToNextSlide}>Next</button>
      </div>
    </SliderWrapper>
  );
};

export default Slider;
