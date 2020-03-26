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
  background-color: ${props => props.theme.color.black.regular};
  background-color: rgba(0, 0, 0, .8);
  border: 2px solid ${props => props.theme.color.primary.regular};
  border-right: none;
  transform: ${props => !props.active && "translateX(100%)"};
  transition: transform 1s ease;
  padding: 20px;
  overflow: scroll;
  z-index: 2000;

  & * {
    color: rgb(0, 255, 70);
  }
`;

export const ButtonRowBody = styled(RowBody)`
  @media ${media.tablet} {
    justify-content: space-around;
  }
`;
