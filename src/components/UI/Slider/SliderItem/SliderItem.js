import { Fragment } from "react";

import PropTypes from "prop-types";

const SliderItem = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

SliderItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SliderItem;
