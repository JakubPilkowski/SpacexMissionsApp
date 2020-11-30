import styled from "styled-components";
import { FlexWrapperRowCenter } from "themes/Wrappers.css";
import wave_true from "../../../assets/wave_true.svg";

export const FooterWrapper = styled.div`
  color: white;
`;

export const FooterWave = styled.div`
  margin: 0;
  height: 80px;
  background-image: url(${wave_true});
  background-repeat: no-repeat;

  @media (max-width: 500px) {
    background-size: 100%;
    background-repeat: repeat-x;
    height: 10px;
  }
`;

export const FooterContent = styled.div`
  background-color: #ff8c00;
  padding: 12px;
`;

export const FooterLinksWrapper = styled(FlexWrapperRowCenter)`
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const FooterLinksTitle = styled.h2`
  letter-spacing: 2px;
  @media (max-width: 500px) {
    font-size: 1.3em;
  }
`;

export const FooterLinks = styled.img`
  height: 40px;
  @media (max-width: 500px) {
    height: 35px;
  }
`;
