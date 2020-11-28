import NavigationItem from "./NavigationItem/NavigationItem";
import { ItemsWrapper } from "./NavigationItems.css";

const NavigationItems = () => (
  <ItemsWrapper>
    <NavigationItem link="/">Misje</NavigationItem>
    <NavigationItem link="/favourites">Ulubione</NavigationItem>
  </ItemsWrapper>
);

export default NavigationItems;
