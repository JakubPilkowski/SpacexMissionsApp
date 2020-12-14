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
  background-color: rgba(53, 63, 98, 1);
  box-shadow: 0px 3px 5px 2px rgba(255, 140, 0, 0.5);

  @media (max-width: 500px) {
    height: 56px;
  }
`;

export const Brand = styled(NavLink)`
  margin-left: 12px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 500px) {
    // margin-left: 3px;
  }
`;

export const BrandLogo = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 500px) {
    height: 36px;
    width: 36px;
  }
`;

export const BrandName = styled.p`
  margin-left: 18px;
  color: white;
  font-size: 1.7rem;
  text-shadow: 2px 2px 3px rgba(255, 140, 0, 0.75);
  font-style: italic;
  font-weight: bold;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ItemsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  flex-flow: row;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
`;
