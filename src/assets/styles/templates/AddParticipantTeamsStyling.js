import styled from "styled-components";
import BodyContainer from "../../atoms/BodyContainer";
import { type, Solid, media } from "../GlobalStyles";

import React from "react";

export const BodyContainerColumn = styled(props => (
  <BodyContainer {...props} />
))`
  flex-direction: column;
  justify-content: start;
`;
export const StyledContainer = styled.div`
display: block;
position: relative;
`;

export const Container = styled.div`
input {
  font-family: ${type.ROBOTO};
  font-size: 16px;
  font-weight: 500;
  color: ${Solid.BLACK};
  border: 1px solid ${Solid.BORDER_GREY};
  border-radius: 6px;
  padding: 10px;
  margin: 0 20px 10px 0;
  ${({ display }) =>
    display === "wide" ? `width: 100%;` : `width: 180px;`}

  &:focus {
    transition: all 0.5s;
    box-shadow: 0 0 3px #ddd;
  }
}

@media ${media.tablet} {
  width: 100%;
  margin-right: 0;
}
`;

export const StyledWidget = styled.div`
margin-bottom: 10px;
cursor: pointer;
`;