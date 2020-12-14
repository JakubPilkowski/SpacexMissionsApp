import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ItemWrapper = styled.li`
  margin: 6px;
  box-sizing: border-box;
  display: block;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);

  @media (max-width: 500px) {
    margin: 12px;
  }
`;
export const Item = styled(NavLink)`
  color: white;
  text-decoration: none;
  width: 100%;
  font-size: 1.4rem;
  font-style: italic;
  border-radius: 12px;
  padding: 6px 24px;
  box-sizing: border-box;
  display: block;
  &:hover,
  &:active,
  &.active {
    background-color: rgba(255, 140, 0, 1);
    transition: 750ms ease-out;
  }

  @media (max-width: 500px) {
    font-size: 1.1em;
    padding: 6px 12px;
  }
`;
