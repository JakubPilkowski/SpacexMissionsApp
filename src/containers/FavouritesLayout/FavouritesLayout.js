import { Fragment } from "react";
import { connect } from "react-redux";
import { removeFavourite } from "../../actions/favourite.action";
import { CenteredH1 } from "../../utils/Texts.css";
import Button from "@material-ui/core/Button";
import { Mission } from "components";

const FavouritesLayout = ({ favourites, removeFavourite }) => (
  <Fragment>
    <CenteredH1>List of favourites</CenteredH1>
    {favourites.map((favourite) => {
      console.log(favourite);
      return (
        <Fragment>
          <Mission key={favourite.id} {...favourite} isFavourite />
          <div style={{ backgroundColor: "red" }}>
            <Button onClick={() => removeFavourite(favourite.id)}>Usuń</Button>
          </div>
        </Fragment>
      );
    })}
  </Fragment>
);

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  removeFavourite,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesLayout);
