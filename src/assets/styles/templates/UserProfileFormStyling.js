import styled from "styled-components";

import { media } from '../variables/media';
import WideBody from "../atoms/WideBodyStyling";
import { RowBody } from "../atoms/RowBodyStyling";
import Button from "../../../components/atoms/Button";

export const StyledWideBody = styled(WideBody)`
  ${props => props.theme.shadow.box};
  display: ${({ active }) => !active && `none`};
  position: absolute; top: 0; right: 0;
  width: 300px; height: 100%;
  background-color: ${props => props.theme.color.white.bg};
  border: 2px solid  ${props => props.theme.color.primary.regular};
  border-right: none;
  transform: ${props => !props.active &&'translateX(100%)'};
  transition: transform 1s ease;
  padding: 20px;
  z-index: 2000;
`;

export const ButtonRowBody = styled(RowBody)`
  @media ${media.tablet} {
    justify-content: space-around;
  }
`
export const NewButton = styled(Button)`
  @media ${media.tablet} {
    width: 25%;
  }
  @media ${media.mobile} {
    width: 50%
  }
`