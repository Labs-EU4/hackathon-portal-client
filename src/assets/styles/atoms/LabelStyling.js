import styled from "styled-components";

export const Label = styled.label`
  display: inline-block;
  font-weight: bold; font-size: 14px;
  color: ${props => props.theme.color.grey.light};
  margin-right: auto;
  padding: 5px;
`;