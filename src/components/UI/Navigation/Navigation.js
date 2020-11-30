import { Brand, BrandLogo, BrandName, Wrapper } from "./Navigation.css";
import rocket from "../../../assets/rocket.svg";
import NavigationItems from "./NavigationItems/NavigationItems";

const Navigation = (props) => (
  <Wrapper opacity={props.opacity}>
    <Brand to="/">
      <BrandLogo src={rocket} />
      <BrandName>SpaceX Missions</BrandName>
    </Brand>
    <NavigationItems />
  </Wrapper>
);

export default Navigation;
