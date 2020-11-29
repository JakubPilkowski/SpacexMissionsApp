import React, { useState } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Details from "../Details";
import { Wrapper } from "containers/MissionsLayout/MissionsLayout.css";
import { MissionCard } from "./Mission.css";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { FlexContainer, FlexWrapperRowBetween } from "utils/Wrappers.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { CardActions } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";

const Mission = ({
  id,
  name,
  details,
  image,
  isFavourite,
  mode = "default",
  onRemove,
}) => {
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onMissionClickHandler = () => {
    setIsOpen(true);
  };
  const onMissionCloseHandler = (type) => {
    if (type === "added") {
      setSnackbarMessage(`Dodano ${name} do ulubionych misji!!!`);
      setSnackbarOpen(true);
    }
    setIsOpen(false);
  };

  const onRemoveFromFavourites = () => {
    console.log("halo");
    setSnackbarMessage(`Usunięto ${name} z ulubionych misji!!!`);
    setSnackbarOpen(true);
    onRemove(id);
  };

  const onSnackbarClose = (event, reason) => {
    setSnackbarOpen(false);
  };

  let detailsView;
  if (details) {
    detailsView =
      details.length < 200 ? details : details.slice(0, 197) + "...";
  } else {
    detailsView = "Details empty";
  }

  return (
    <Wrapper>
      <Dialog
        maxWidth={"lg"}
        open={isOpen}
        onClose={() => onMissionCloseHandler("default")}
      >
        <MuiDialogContent>
          <Details
            id={id}
            isFavourite={isFavourite}
            onClose={() => onMissionCloseHandler("added")}
          />
        </MuiDialogContent>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={onSnackbarClose}
        message={snackbarMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />

      <MissionCard
        style={{
          backgroundColor: "#826B57",
          color: "white",
          boxShadow: "0px 0px 3px 3px rgba(255, 140, 0, 1)",
        }}
      >
        <FlexContainer style={{}}>
          <CardActions>
            <FlexWrapperRowBetween>
              <div>
                {mode === "default" && isFavourite ? (
                  <h4
                    style={{
                      margin: 0,
                      display: "inline",
                      borderRadius: "6px",
                      backgroundColor: "#ff8c00",
                      padding: "6px",
                    }}
                  >
                    In Favourites
                  </h4>
                ) : (
                  <h4></h4>
                )}
              </div>
              <div>
                {mode === "favourites" ? (
                  <IconButton
                    aria-label="delete"
                    color="primary"
                    onClick={onRemoveFromFavourites}
                  >
                    <DeleteIcon />
                  </IconButton>
                ) : null}
              </div>
            </FlexWrapperRowBetween>
          </CardActions>
          <CardActionArea onClick={onMissionClickHandler}>
            <CardContent>
              <FlexWrapperRowBetween>
                <div>
                  <h1>{name}</h1>
                  <h4>Details</h4>
                </div>
                <img src={image} height="100" />
              </FlexWrapperRowBetween>
              <Typography>{detailsView}</Typography>
            </CardContent>
          </CardActionArea>
        </FlexContainer>
      </MissionCard>
    </Wrapper>
  );
};

export default Mission;
