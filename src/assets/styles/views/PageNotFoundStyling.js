import { BodyContainer } from "../atoms/BodyContainerStyling";
import { H2 } from "../atoms/HeadingStyling";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BodyColumn = styled(BodyContainerN)`
  flex-direction: column;
  align-items: start;
  height: 100%;
  width: 50%;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const BodyRow = styled(BodyContainer)`
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 100vw;
`;

export const Header2 = styled(H2)`
  font-size: 70px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: lightcoral;
  padding-top: 10px;
`;
