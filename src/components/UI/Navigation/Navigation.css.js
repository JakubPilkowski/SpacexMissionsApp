import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 64px;
  color: white;
  background-color: #020202;
  box-shadow: 0px 3px 5px 2px rgba(255, 140, 0, 0.5);
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

export const BrandName = styled.a`
  margin-left: 18px;
  color: white;
  font-size: 1.7rem;
  text-shadow: 2px 2px 3px rgba(255, 140, 0, 0.75);
  font-style: italic;
  font-weight: bold;
`;
