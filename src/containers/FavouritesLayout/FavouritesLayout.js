import { Fragment } from "react";
import { connect } from "react-redux";
import { removeFavourite } from "../../actions/favourite.action";
import { Title } from "../../utils/Texts.css";
import Button from "@material-ui/core/Button";
import { Mission } from "components";

const FavouritesLayout = ({ favourites, removeFavourite }) => (
  <Fragment>
    <Title>List of favourites</Title>
    {favourites.map((favourite) => (
      <Mission
        key={favourite.id}
        {...favourite}
        isFavourite
        mode="favourites"
        onRemove={() => removeFavourite(favourite.id)}
      />
    ))}
  </Fragment>
);

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  removeFavourite,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesLayout);
