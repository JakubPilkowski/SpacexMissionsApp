import { SliderButton } from "components/UI/Slider/Slider.css";
import { Fragment } from "react";
import { FlexWrapperColumnCenter } from "../../../themes/Wrappers.css";
import PropTypes from "prop-types";

const AddToFavourites = ({ click }) => {
  return (
    <Fragment>
      <FlexWrapperColumnCenter>
        <h1>Favourites</h1>
        <SliderButton
          variant="outlined"
          color="primary"
          style={{ marginBottom: "24px" }}
          onClick={click}
        >
          Add to favourites
        </SliderButton>
      </FlexWrapperColumnCenter>
    </Fragment>
  );
};

AddToFavourites.propTypes = {
  click: PropTypes.func.isRequired,
};

export default AddToFavourites;
