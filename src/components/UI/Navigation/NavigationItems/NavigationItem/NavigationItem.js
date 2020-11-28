import { Item, ItemWrapper } from "./NavigationItem.css";

const NavigationItem = (props) => (
  <ItemWrapper>
    <Item exact to={props.link}>
      {props.children}
    </Item>
  </ItemWrapper>
);

export default NavigationItem;
