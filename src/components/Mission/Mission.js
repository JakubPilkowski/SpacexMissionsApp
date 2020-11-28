import React, { Fragment } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Wrapper } from "containers/MissionsLayout/MissionsLayout.css";
import { MissionCard, MissionCardHeader } from "./Mission.css";

const Mission = ({ id, name, details, links: { image }, click }) => {
  let detailsView;
  if (details) {
    detailsView =
      details.length < 200 ? details : details.slice(0, 197) + "...";
  } else {
    detailsView = "Details empty";
  }

  return (
    <Wrapper>
      <MissionCard
        style={{
          backgroundColor: "#826B57",
          color: "white",
          boxShadow: "0px 0px 3px 3px rgba(255, 140, 0, 1)",
        }}
        onClick={click(id)}
      >
        <CardActionArea>
          <CardContent>
            <MissionCardHeader>
              <div>
                <h1>{name}</h1>
                <h2>Details</h2>
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
