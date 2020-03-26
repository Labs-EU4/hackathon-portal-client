import styled from "styled-components";
import { Link } from "react-router-dom";

import { Paragraph } from "../atoms/ParagraphStyling";
import Button from '../../../components/atoms/Button';

export const StyledAnchor = styled(Link)`
  display: block;
  margin: 20px 0 0 0;
  font-weight: 500;
  text-decoration: none; text-transform: none; text-align: center;
  font-size: 12px;
  color: #245ea4;

  &:hover {
    color: #1e77b4;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: 11px;
  color: ${props => props.theme.color.white.regular};
`;

export const StyledButton = styled(Button)`
  margin-top: 10px; margin-bottom: none;
`;