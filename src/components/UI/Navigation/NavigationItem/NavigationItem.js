import { Item, ItemWrapper } from "./NavigationItem.css";
import PropTypes from "prop-types";

const NavigationItem = ({ link, children }) => (
  <ItemWrapper>
    <Item exact to={link}>
      {children}
    </Item>
  </ItemWrapper>
);

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationItem;
