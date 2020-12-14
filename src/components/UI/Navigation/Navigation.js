import {
  Brand,
  BrandLogo,
  BrandName,
  Wrapper,
  ItemsWrapper,
} from "./Navigation.css";
import rocket from "../../../assets/rocket.svg";
import { PREFIX } from "../../../utils/WebsiteLinkPrefix";
import NavigationItem from "./NavigationItem/NavigationItem";

const links = [
  {
    index: 1001,
    to: PREFIX,
    name: "Missions",
  },
  {
    index: 1002,
    to: `${PREFIX}/favourites`,
    name: "Favourites",
  },
];

const Navigation = () => (
  <Wrapper>
    <Brand to={PREFIX}>
      <BrandLogo src={rocket} />
      <BrandName>SpaceX Missions</BrandName>
    </Brand>
    <ItemsWrapper>
      {links.map(({ index, to, name }) => (
        <NavigationItem key={index} link={to}>
          {name}
        </NavigationItem>
      ))}
    </ItemsWrapper>
  </Wrapper>
);

export default Navigation;
