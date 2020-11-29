import {
  ContentWrapper,
  LayoutBackgroundImage,
  LayoutWrapper,
} from "./Layout.css";
import { Navigation } from "../../components";
import { BrowserRouter as Router } from "react-router-dom";

const Layout = (props) => {
  //navigation logic
  return (
    <LayoutWrapper>
      <LayoutBackgroundImage>
        <Router>
          <Navigation></Navigation>
          <ContentWrapper>{props.children}</ContentWrapper>
        </Router>
      </LayoutBackgroundImage>
    </LayoutWrapper>
  );
};

export default Layout;
