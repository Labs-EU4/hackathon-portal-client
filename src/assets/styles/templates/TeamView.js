import styled from "styled-components";

import BodyContainer from "../atoms/BodyContainerStyling";
import { BoldSpan } from "../atoms/SpanStyling";

export const TeamsContainer = styled(BodyContainer)`
  background-color: white;
  width: 50%;
  height: 40%;
  overflow-y: auto;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25%;
  border-radius: 6px;
  padding: 20px;

  p {
    margin: 0;
    padding: 3px;
  }

  button {
    margin: 20px;
  }
`;

export const FancyBoldSpan = styled(BoldSpan)`
  border-bottom: 1px solid lightgray;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

export const StyledLetterIcon = styled.div`
  border: none; border-radius: 50%;
`;

export const NormalSpan = styled(BoldSpan)`
  font-weight: normal;
  padding: 5px;
`;