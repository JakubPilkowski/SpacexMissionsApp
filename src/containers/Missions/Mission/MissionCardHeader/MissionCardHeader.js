import { Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { InFavouritesToggleView } from "./MissionCardHeader.css";
import PropTypes from "prop-types";
import requiredIf from "react-required-if";

const MissionCardHeader = ({ mode, isFavourite, context, onRemove }) => {
  const onRemoveFavouriteHandler = () => {
    onRemove(context);
  };

  const header =
    mode === "default" ? (
      <InFavouritesToggleView isFavourite={isFavourite}>
        {isFavourite ? "In favourites" : "Not in favourites"}
      </InFavouritesToggleView>
    ) : (
      <IconButton
        aria-label="delete"
        color="primary"
        onClick={onRemoveFavouriteHandler}
      >
        <DeleteIcon fontSize="large" />
      </IconButton>
    );

  return <Fragment>{header}</Fragment>;
};

MissionCardHeader.propTypes = {
  mode: PropTypes.oneOf(["default", "favourites"]).isRequired,
  isFavourite: PropTypes.bool.isRequired,
  context: requiredIf(
    PropTypes.objectOf(PropTypes.func),
    (props) => props.mode === "default"
  ),
  onRemove: requiredIf(PropTypes.func, (props) => props.mode === "default"),
};

export default MissionCardHeader;
