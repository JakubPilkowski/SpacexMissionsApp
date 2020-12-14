import React, { useState } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  MissionCard,
  MissionCardInFavourites,
  MissionCardTitle,
  MissionCardHeader,
  MissionCardImage,
} from "./Mission.css";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { FlexContainer, FlexWrapperColumnCenter } from "themes/Wrappers.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { CardActions } from "@material-ui/core";
import Details from "../../Details";
import FavouritesContext from "../../../context/favourites-context";

import PropTypes from "prop-types";

const Mission = ({ id, name, details, image, isFavourite, mode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onMissionClickHandler = () => {
    setIsOpen(true);
  };
  const onMissionCloseHandler = () => {
    setIsOpen(false);
  };

  let detailsView = details
    ? details.length < 200
      ? details
      : `${details.slice(0, 197)}...`
    : "Details empty";

  return (
    <FlexWrapperColumnCenter>
      <Dialog maxWidth={"lg"} open={isOpen} onClose={onMissionCloseHandler}>
        <MuiDialogContent>
          <Details
            id={id}
            isFavourite={isFavourite}
            onClose={onMissionCloseHandler}
          />
        </MuiDialogContent>
      </Dialog>

      <MissionCard
        style={{
          backgroundColor: "#826B57",
          color: "white",
          boxShadow: "0px 0px 3px 3px rgba(255, 140, 0, 1)",
        }}
      >
        <FlexContainer>
          <FavouritesContext.Consumer>
            {/* utworzyć component header */}
            {(context) => (
              <CardActions>
                {mode === "default" ? (
                  <MissionCardInFavourites isFavourite={isFavourite}>
                    {isFavourite ? "In favourites" : "Not in favourites"}
                  </MissionCardInFavourites>
                ) : (
                  <IconButton
                    aria-label="delete"
                    color="primary"
                    onClick={() => context.remove(id)}
                  >
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                )}
              </CardActions>
            )}
          </FavouritesContext.Consumer>
          <CardActionArea onClick={onMissionClickHandler}>
            <CardContent>
              <MissionCardHeader>
                <MissionCardTitle>{name}</MissionCardTitle>
                <MissionCardImage src={image} alt={`${name} mission`} />
              </MissionCardHeader>
              <Typography paragraph>{detailsView}</Typography>
            </CardContent>
          </CardActionArea>
        </FlexContainer>
      </MissionCard>
    </FlexWrapperColumnCenter>
  );
};

Mission.defaultProps = {
  mode: "default",
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  details: PropTypes.string,
  image: PropTypes.string,
  isFavourite: PropTypes.bool.isRequired,
  mode: PropTypes.oneOf(["default", "favourites"]).isRequired,
};

export default Mission;
