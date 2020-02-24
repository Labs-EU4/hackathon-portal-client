import React from "react";
import styled from "styled-components";

import Icon from "../atoms/Icon";
import { Span } from "../atoms/Span";

const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSpan = styled(Span)`
  margin: 0 0 0 5px;
`;

const CardFooter = ({ date }) => (
  <StyledCardFooter>
    {/* <Icon icon="calendar"/> */}
    <StyledSpan>{date}</StyledSpan>
  </StyledCardFooter>
);

export default CardFooter;
