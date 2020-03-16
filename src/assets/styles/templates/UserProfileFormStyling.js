import styled from "styled-components";
import { BodyContainer } from "../atoms/BodyContainer";
import { Label } from "../atoms/Label";
import { CardWide } from "../atoms/Card";
import { RowBody, RowBodyN } from "../atoms/RowBody";
import Button from "../../../components/atoms/Button";
import { media } from '../variables/index';
import { WideBody } from "../atoms/WideBody"

import React from "react";

export const BodyContainerColumn = styled(props => (
  <BodyContainer {...props} />
))`
  flex-direction: column;
  justify-content: start;
`;
export const NewLabel = styled(Label)`
padding-left: 3px;
@media ${media.tablet} {
  display: none;
}
@media ${media.mobile} {
  display: none;
}f
`;

export const CardWider = styled(CardWide)`
margin-left: 150px;
@media ${media.tablet} {
  margin-left: 0px;
}
@media ${media.mobile} {
  margin-left: 0px;
}
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
// --------------------------------- NEW // --------------------------------- //


export const StyledWideBodyN = styled(WideBody)`
  ${props => props.theme.shadow.box};
  position: absolute; top: 0; right: 0;
  width: 300px; height: 100%;
  background-color: ${props => props.theme.color.white.bg};
  border-left: 2px solid  ${props => props.theme.color.primary.regular};
  transform: ${props => !props.active && 'translateX(100%)'};
  transition: transform 1s ease;
  padding: 20px;
  overflow: scroll;
  z-index: 2000;
`;

export const ButtonRowBodyN = styled(RowBodyN)`
  @media ${media.tablet} {
    justify-content: space-around;
  }
`
export const NewButtonN = styled(Button)`
  @media ${media.tablet} {
    width: 25%;
  }
  @media ${media.mobile} {
    width: 50%
  }
`