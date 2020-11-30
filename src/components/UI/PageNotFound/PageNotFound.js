import { Button } from "@material-ui/core";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FlexWrapperRowCenter } from "themes/Wrappers.css";
import { CenteredH1, Title } from "../../../themes/Texts.css";

const PageNotFound = () => (
  <Fragment>
    <Title>Sorry, we dont have page like this</Title>
    <FlexWrapperRowCenter>
      <Button
        color="primary"
        variant="contained"
        style={{ textTransform: "none", fontSize: "1rem" }}
        href="/"
      >
        Back to main page
      </Button>
    </FlexWrapperRowCenter>
  </Fragment>
);

export default PageNotFound;
