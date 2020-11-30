import styled from "styled-components";
import wave_true from "../../../assets/wave_true.svg";

export const FooterWrapper = styled.div`
  color: white;
`;

export const FooterWave = styled.div`
  margin: 0;
  height: 80px;
  background-image: url(${wave_true});
  background-repeat: no-repeat;
`;

export const FooterContent = styled.div`
  background-color: #ff8c00;
  padding: 12px;
`;
