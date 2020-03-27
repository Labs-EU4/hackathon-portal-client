import styled from "styled-components";

import { BodyContainer } from "../atoms/BodyContainerStyling";
import { WideBody } from "../atoms/WideBodyStyling";

export const StyledWideBody = styled(WideBody)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
  z-index: 100;
`;

export const BodyRow = styled(BodyContainer)`
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  max-width: 100vw;
`;

export const BodyColumn = styled(BodyContainer)`
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  max-width: 100vw;
`;

export const Form = styled.form`
  width: 50%; height: 35vh;
  background-color: black;
  border: 1px solid ${props => props.theme.color.primary.regular};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25%;
  border-radius: 6px;
  h4 {
    margin: 40px 10px 10px;
    padding: 5px;
    font-size: 16px;
    color: ${props => props.theme.color.primary.regular};
  }
  label {
    margin: 10px;
    font-size: 14px; letter-spacing: 1px;
    color: ${props => props.theme.color.primary.regular};
  }
  input {
    width: 50%;
    padding: 10px;
    margin: 10px;
    border: 1px solid ${props => props.theme.color.grey.border};
    border-radius: 6px;
    font-size: 14px;
  }
  button {
    width: 50%;
    margin: 10px;
  }
`;
