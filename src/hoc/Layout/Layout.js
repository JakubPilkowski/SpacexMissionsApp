import { Navigation } from "../../components";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "components/UI/Footer/Footer";
import PropTypes from "prop-types";
import { CenteredH1 } from "themes/Texts.css";
import "../../sass/pages/layout.scss";

const Layout = (props) => {
  return (
    <div className="layout-background-image">
      <div className="layout-background">
        <Router>
          <Navigation />
          <div className="layout-content">{props.children}</div>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  children: <CenteredH1>Put a content into Layout Component!!!</CenteredH1>,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
