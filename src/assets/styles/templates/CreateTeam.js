import styled from "styled-components";

import BodyContainer from "../atoms/BodyContainer";

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