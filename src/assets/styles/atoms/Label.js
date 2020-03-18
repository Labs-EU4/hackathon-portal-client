import styled from "styled-components";
import { type } from "../variables/index";

export const LabelN = styled.label`
  display: inline-block;
  font-weight: bold;
  color: ${props => props.theme.color.grey.light};
  margin-right: auto;
  padding: 5px;
`;

