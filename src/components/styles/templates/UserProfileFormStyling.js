import styled from "styled-components";
import BodyContainer from "../../atoms/BodyContainer";
import Label from "../../atoms/Label";
import { CardWide } from "../../atoms/Card";
import { RowBody } from "../../atoms/RowBody";
import Button from "../../atoms/Button";
import { media } from '../../variables/media';

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