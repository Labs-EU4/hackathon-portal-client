import styled from "styled-components";

const Label = styled.label`
  display: inline-block;
  font-weight: bold;
  color: ${props => props.theme.color.grey.light};
  margin-right: auto;
  padding: 5px;
`;

export default Label;