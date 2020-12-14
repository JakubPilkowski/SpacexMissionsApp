import {
  ContentWrapper,
  LayoutBackgroundImage,
  LayoutWrapper,
} from "./Layout.css";
import { Navigation } from "../../components";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "components/UI/Footer/Footer";
import PropTypes from "prop-types";
import { CenteredH1 } from "themes/Texts.css";

const Layout = (props) => {
  return (
    <LayoutBackgroundImage>
      <LayoutWrapper>
        <Router>
          <Navigation />
          <ContentWrapper>{props.children}</ContentWrapper>
          <Footer />
        </Router>
      </LayoutWrapper>
    </LayoutBackgroundImage>
  );
};

Layout.defaultProps = {
  children: <CenteredH1>Put a content into Layout Component!!!</CenteredH1>,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
