import styled from "styled-components";

import { BodyContainer } from "../atoms/BodyContainerStyling";
import { WideBody } from "../atoms/WideBodyStyling";

export const StyledWideBody = styled(WideBody)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

export const BodyRow = styled(BodyContainerN)`
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  max-width: 100vw;
`;

export const BodyColumn = styled(BodyContainerN)`
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  max-width: 100vw;
`;

export const Form = styled.form`
  background-color: white;
  width: 50%;
  height: 35vh;
  border: 1px solid ${props => props.theme.color.grey.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25%;
  border-radius: 6px;
  h4 {
    margin: 10px;
    padding: 5px;
  }
  label {
    margin: 10px;
  }
  input {
    width: 50%;
    padding: 10px;
    margin: 10px;
    border: 1px solid ${props => props.theme.color.grey.border};
    border-radius: 6px;
  }
  button {
    width: 50%;
    margin: 10px;
  }
`;
