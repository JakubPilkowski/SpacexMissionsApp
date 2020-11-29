import { SliderButton } from "components/UI/Slider/Slider.css";
import { Fragment } from "react";
import { FlexWrapperColumnCenter } from "../../../utils/Wrappers.css";

const AddToFavourites = ({ click }) => {
  return (
    <Fragment>
      <FlexWrapperColumnCenter>
        <h1>Favourites</h1>
        <SliderButton
          variant="outlined"
          color="primary"
          style={{ marginBottom: "24px" }}
          onClick={() => {}}
        >
          Add to favourites
        </SliderButton>
      </FlexWrapperColumnCenter>
    </Fragment>
  );
};

export default AddToFavourites;
