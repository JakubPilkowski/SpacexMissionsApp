import { Fragment } from "react";
import {
  FlexWrapperRowCenter,
  FlexWrapperRowBetween,
} from "themes/Wrappers.css";
import { FooterContent, FooterWave, FooterWrapper } from "./Footer.css";
import linkedin_logo from "../../../assets/linkedin.svg";
import github_logo from "../../../assets/github.svg";
import { StyledA } from "themes/Texts.css";
import GraphicsTribute from "./GraphiceTribute/GraphicsTribute";

const Footer = () => (
  <Fragment>
    <FooterWrapper>
      <FooterWave></FooterWave>
      <FooterContent>
        <FlexWrapperRowBetween>
          <FlexWrapperRowCenter>
            <GraphicsTribute />
          </FlexWrapperRowCenter>
          <FlexWrapperRowCenter>
            <h2 style={{ letterSpacing: "2px" }}>Find me in:</h2>
            <StyledA
              href="https://github.com/JakubPilkowski"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github_logo} height="40" />
            </StyledA>
            <StyledA
              href="https://www.linkedin.com/in/jakub-piłkowski-4a14341b8/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin_logo} height="40" />
            </StyledA>
          </FlexWrapperRowCenter>
        </FlexWrapperRowBetween>
      </FooterContent>
    </FooterWrapper>
  </Fragment>
);

export default Footer;
