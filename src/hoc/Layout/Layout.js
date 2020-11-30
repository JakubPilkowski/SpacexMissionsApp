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
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      if (currentScrollHeight !== newScrollHeight && newScrollHeight <= 600) {
        setCurrentScrollHeight(newScrollHeight);
      }
    };
  });

  let opacity = currentScrollHeight / 600 > 1 ? 1 : currentScrollHeight / 600;

  return (
    <LayoutBackgroundImage>
      <LayoutWrapper>
        <Router>
          <Navigation opacity={opacity} />
          <ContentWrapper>{props.children}</ContentWrapper>
        </Router>
      </LayoutWrapper>
    </LayoutBackgroundImage>
  );
};

export default Layout;
