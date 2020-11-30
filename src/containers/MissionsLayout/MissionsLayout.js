import Missions from "./Missions/Missions";
import { Wrapper } from "./MissionsLayout.css";
import { connect } from "react-redux";
import { Title } from "utils/Texts.css";

const MissionsLayout = ({ favourites }) => (
  <Wrapper>
    <Missions favourites={favourites}></Missions>
  </Wrapper>
);

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(MissionsLayout);
