import NavigationItem from "./NavigationItem/NavigationItem";
import { ItemsWrapper } from "./NavigationItems.css";

const NavigationItems = () => (
  <ItemsWrapper>
    <NavigationItem link="/SpacexMissionsApp/">Missions</NavigationItem>
    <NavigationItem link="/SpacexMissionsApp/favourites">
      Favourites
    </NavigationItem>
  </ItemsWrapper>
);

export default NavigationItems;
