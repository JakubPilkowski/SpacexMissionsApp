import { Fragment } from "react";
import { Title } from "../../themes/Texts.css";
import Mission from "../Missions/Mission";

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

export default Favourites;
