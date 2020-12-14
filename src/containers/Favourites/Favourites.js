import { Fragment } from "react";
import { Title } from "../../themes/Texts.css";
import Mission from "../Missions/Mission";
import PropTypes from "prop-types";

const Favourites = ({ favourites }) => (
  <Fragment>
    <Title>List of favourites</Title>
    {favourites.map((favourite) => (
      <Mission
        key={favourite.id}
        {...favourite}
        isFavourite
        mode="favourites"
      />
    ))}
  </Fragment>
);

Favourites.propTypes = {
  favourites: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      details: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default Favourites;
