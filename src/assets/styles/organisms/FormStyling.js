import styled from "styled-components";
import { Link } from "react-router-dom";
import { type, smallFontSize } from "../variables/index";

export const StyledAnchor = styled(Link)`
  display: block;
  margin: 20px 0 0 0;
  font-family: ${type.ROBOTO};
  font-size: ${smallFontSize};
  font-weight: 500;
  color: #245ea4;
  text-decoration: none;
  text-transform: none;
  text-align: center;
  &:hover {
    color: #1e77b4;
  }
`;