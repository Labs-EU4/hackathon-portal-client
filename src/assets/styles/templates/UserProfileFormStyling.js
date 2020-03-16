import styled from "styled-components";
import BodyContainerO from "../atoms/BodyContainer";
import LabelO from "../atoms/Label";
import { CardWideO } from "../atoms/Card";
import { RowBodyO } from "../atoms/RowBody";
import Button from "../../../components/atoms/Button";
import { media } from '../variables/index';

import React from "react";

export const BodyContainerColumn = styled(props => (
  <BodyContainerO {...props} />
))`
  flex-direction: column;
  justify-content: start;
`;
export const NewLabel = styled(LabelO)`
padding-left: 3px;
@media ${media.tablet} {
  display: none;
}
@media ${media.mobile} {
  display: none;
}f
`;

export const CardWider = styled(CardWideO)`
margin-left: 150px;
@media ${media.tablet} {
  margin-left: 0px;
}
@media ${media.mobile} {
  margin-left: 0px;
}
`;

export const ButtonRowBody = styled(RowBodyO)`
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