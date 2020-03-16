import styled from "styled-components";
import { type } from "../variables/index";

export const Label = styled.label`
  font-family: ${type.ROBOTO};
  font-weight: bold;
  color: #696969;
  margin: 0 0 10px;
`;


// --------------------------------- NEW --------------------------------- //


export const LabelN = styled.label`
  display: inline-block;
  font-weight: bold;
  color: ${props => props.theme.color.grey.light};
  margin-right: auto;
  padding: 5px;
`;
