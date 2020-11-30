import {
  ContentWrapper,
  LayoutBackgroundImage,
  LayoutWrapper,
} from "./Layout.css";
import { Navigation } from "../../components";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "components/UI/Footer/Footer";

const Layout = (props) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    window.onscroll = () =>
      window.scrollY >= 400 ? setOpacity(1) : setOpacity(0);
  });

  return (
    <LayoutBackgroundImage>
      <LayoutWrapper>
        <Router>
          <Navigation opacity={opacity} />
          <ContentWrapper>{props.children}</ContentWrapper>
          <Footer />
        </Router>
      </LayoutWrapper>
    </LayoutBackgroundImage>
  );
};

export default Layout;
