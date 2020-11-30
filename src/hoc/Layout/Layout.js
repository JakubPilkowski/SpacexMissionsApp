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

export default Layout;
