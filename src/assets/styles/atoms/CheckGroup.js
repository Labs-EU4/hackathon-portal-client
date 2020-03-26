import styled from "styled-components";

export const CheckGroup = styled.div`
  width: ${props => (props.short ? "120px" : "180px")};
  label {
    font-weight: normal;
  }
`;
