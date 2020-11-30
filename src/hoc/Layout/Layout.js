import {
  ContentWrapper,
  LayoutBackgroundImage,
  LayoutWrapper,
} from "./Layout.css";
import { Navigation } from "../../components";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = (props) => {
  const [currentScrollHeight, setCurrentScrollHeight] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 30) * 30;
      if (currentScrollHeight != newScrollHeight) {
        setCurrentScrollHeight(newScrollHeight);
      }
    };
  });

  let opacity = currentScrollHeight / 800 > 1 ? 1 : currentScrollHeight / 500;

  return (
    <LayoutWrapper>
      <LayoutBackgroundImage>
        <Router>
          <Navigation opacity={opacity} />
          <ContentWrapper>{props.children}</ContentWrapper>
        </Router>
      </LayoutBackgroundImage>
    </LayoutWrapper>
  );
};

export default Layout;
