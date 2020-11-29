import Missions from "./Missions/Missions";
import { Wrapper } from "./MissionsLayout.css";
import { connect } from "react-redux";

const MissionsLayout = ({ favourites }) => (
  <Wrapper>
    <h1 style={{ color: "white", margin: "75px" }}>Missions List</h1>
    <Missions favourites={favourites}></Missions>
  </Wrapper>
);

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(MissionsLayout);
