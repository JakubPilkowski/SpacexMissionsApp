import NavigationItem from "./NavigationItem/NavigationItem";
import { ItemsWrapper } from "./NavigationItems.css";

const NavigationItems = () => (
  <ItemsWrapper>
    <NavigationItem link="/">Missions</NavigationItem>
    <NavigationItem link="/favourites">Favourites</NavigationItem>
  </ItemsWrapper>
);

export default NavigationItems;
