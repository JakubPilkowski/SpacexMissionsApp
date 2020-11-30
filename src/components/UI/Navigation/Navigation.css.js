import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 100;
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 64px;
  color: white;
  background-color: rgba(53, 63, 98, ${(props) => props.opacity});
  box-shadow: 0px 3px 5px 2px
    rgba(255, 140, 0, ${(props) => 0.5 * props.opacity});
`;

export const Brand = styled(NavLink)`
  margin-left: 12px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

export const BrandLogo = styled.img`
  height: 40px;
  width: 40px;
`;

export const BrandName = styled.p`
  margin-left: 18px;
  color: white;
  font-size: 1.7rem;
  text-shadow: 2px 2px 3px rgba(255, 140, 0, 0.75);
  font-style: italic;
  font-weight: bold;
`;
