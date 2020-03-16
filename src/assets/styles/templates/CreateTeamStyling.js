import { BodyContainer, BodyContainerN } from "../atoms/BodyContainer";
import { WideBody } from '../atoms/WideBody';
import styled from "styled-components";

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
  border: 1px solid lightgray;
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
    border: 1px solid lightgray;
    border-radius: 6px;
  }
  button {
    width: 50%;
    margin: 10px;
  }
`;

export const Title = styled.span`
    color: "#273F92";
    background-color: "aliceblue";
`;

// --------------------------------- NEW // --------------------------------- //

export const StyledWideBodyN = styled(WideBody)`
  position: absolute; top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, .4);
  z-index: 100;
`;

export const BodyRowN = styled(BodyContainerN)`
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  max-width: 100vw;
`;

export const BodyColumnN = styled(BodyContainerN)`
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  max-width: 100vw;
`;

export const FormN = styled.form`
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


