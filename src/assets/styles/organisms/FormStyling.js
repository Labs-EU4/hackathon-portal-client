import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledAnchor = styled(Link)`
  display: block;
  margin: 20px 0 0 0;
  font-weight: 500;
  text-decoration: none; text-transform: none; text-align: center;
  ${props => props.theme.fontSize.small};
  color: #245ea4;

  &:hover {
    color: #1e77b4;
  }
`;