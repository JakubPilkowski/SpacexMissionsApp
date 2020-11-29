import React, { useState } from "react";
import Slide from "./Slide/Slide";
import {
  SliderDot,
  SliderWrapper,
  SliderBottomView,
  SliderButton,
} from "./Slider.css";

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

  const goToSlide = (id) => {
    console.log("dot click");
    setActiveIndex(id);
  };
  let content = [];

  for (let i = 0; i < props.length; i++) {
    content.push(
      <SliderDot
        key={i}
        className={activeIndex === i ? "active" : "inactive"}
        onClick={() => goToSlide(i)}
      />
    );
  }

  return (
    <SliderWrapper>
      {props.children.map((child, index) => (
        <Slide key={index} activeIndex={activeIndex} index={index}>
          {child}
        </Slide>
      ))}
      <SliderBottomView>
        <SliderButton color="primary" onClick={goToPrevSlide}>
          Prev
        </SliderButton>
        <div style={{ display: "flex" }}>{content}</div>
        <SliderButton color="primary" onClick={goToNextSlide}>
          Next
        </SliderButton>
      </SliderBottomView>
    </SliderWrapper>
  );
};

export default Slider;
