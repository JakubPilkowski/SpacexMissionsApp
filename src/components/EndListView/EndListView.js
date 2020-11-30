import { FlexWrapperColumnCenter } from "../../themes/Wrappers.css";
import { Button } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import { CenteredH1 } from "themes/Texts.css";
const EndListView = (props) => {
  return (
    <FlexWrapperColumnCenter style={{ color: "white", marginBottom: "24px" }}>
      <SentimentVeryDissatisfiedIcon
        style={{ fontSize: "200px" }}
        color="primary"
      />
      <CenteredH1>There is no more missions</CenteredH1>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<ArrowUpwardIcon />}
        endIcon={<ArrowUpwardIcon />}
        onClick={props.onBackToTop}
        style={{ color: "white", fontWeight: "bold", textTransform: "none" }}
      >
        Back to top
      </Button>
    </FlexWrapperColumnCenter>
  );
};

export default EndListView;
