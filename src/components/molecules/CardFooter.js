// ----------------- THIS IS NOT USED IN THE NEW CODE BASE ----------------------- //

import React from "react";
import { DateIcon } from "../atoms/Icon";
import styled from "styled-components";

const StyledCardFooter = styled.div`
  display: flex; align-items: center;
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
