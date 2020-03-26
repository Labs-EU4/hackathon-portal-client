import styled from "styled-components";

import { media } from "../variables/media";
import { WideBody } from "../atoms/WideBodyStyling";
import { RowBody } from "../atoms/RowBodyStyling";

export const StyledWideBody = styled(WideBody)`
  ${props => props.theme.shadow.box};
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: ${props => props.theme.color.white.regular};
  border-left: 2px solid ${props => props.theme.color.primary.regular};
  transform: ${props => !props.active && "translateX(100%)"};
  transition: transform 1s ease;
  padding: 20px;
  overflow: scroll;
  z-index: 2000;
`;

export const ButtonRowBody = styled(RowBody)`
  @media ${media.tablet} {
    justify-content: space-around;
  }
`;
