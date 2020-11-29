import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const SliderWrapper = styled.div`
  width: 600px;
  max-width: 600px;
  max-height: 450px;
`;

export const SliderBottomView = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SliderDot = styled.div`
  width: 14px;
  height: 14px;
  margin: 4px;
  border-radius: 50%;
  cursor: pointer;
  &.active {
    background-color: #ff8c00;
  }
  &.inactive {
    background-color: #826b57;
  }
`;

export const SliderButton = styled(Button)`
  text-transform: none;
`;
