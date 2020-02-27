import styled from "styled-components";
import { type } from '../index';

const Label = styled.label`
  font-family: ${type.ROBOTO};
  font-weight: bold;
  color: ${props => props.theme.color.grey.light};
  margin: 0 0 10px;
`;

export default Label;