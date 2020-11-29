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

const Mission = ({
  id,
  name,
  details,
  image,
  isFavourite,
  mode = "default",
  onRemove,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onMissionClickHandler = () => {
    setIsOpen(true);
  };
  const onMissionCloseHandler = () => {
    setIsOpen(false);
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
        <FlexContainer style={{ margin: 0, padding: 0 }}>
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
                    onClick={onRemove}
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
