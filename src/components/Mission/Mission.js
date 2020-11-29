import React, { useState } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Details from "../Details";
import { Wrapper } from "containers/MissionsLayout/MissionsLayout.css";
import { MissionCard, MissionCardHeader } from "./Mission.css";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";

const Mission = ({ id, name, details, image, isFavourite }) => {
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
        onClick={onMissionClickHandler}
      >
        <CardActionArea>
          <CardContent>
            <MissionCardHeader>
              <div>
                <h1>{name}</h1>
                <h4>Details</h4>
                {isFavourite ? (
                  <h5>Dodano już do ulubionych!!!</h5>
                ) : (
                  <h5>Nie</h5>
                )}
              </div>
              <img src={image} height="100" />
            </MissionCardHeader>
            <Typography>{detailsView}</Typography>
          </CardContent>
        </CardActionArea>
      </MissionCard>
    </Wrapper>
  );
};

export default Mission;
