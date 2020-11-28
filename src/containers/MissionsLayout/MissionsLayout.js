import Missions from "./Missions/Missions";
import { Wrapper } from "./MissionsLayout.css";

const MissionsLayout = () => (
  <Wrapper>
    <h1 style={{ color: "white", margin: "75px" }}>
      Zbiór najważniejszych misji kosmicznych
    </h1>
    <Missions></Missions>
  </Wrapper>
);

export default MissionsLayout;
