import React from "react";
import styled from "styled-components";

import { DateIcon } from "../atoms/Icon";
import { Span } from "../../assets/atoms/Span";

const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSpan = styled(Span)`
  margin: 0 0 0 5px;
`;

const CardFooter = ({ date, event_title }) => (
  <StyledCardFooter>
    <DateIcon />
    <StyledSpan data-testid={`date-${event_title}`}>{date}</StyledSpan>
  </StyledCardFooter>
);

export default CardFooter;
