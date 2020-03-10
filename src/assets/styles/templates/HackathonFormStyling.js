import styled from 'styled-components';
import { Form } from "formik";

import Button from "../../../components/atoms/Button";
import { H3 } from "../atoms/HeadingStyling";

export const FormContainer = styled.div`
  position: relative;
  width: 100%; height: 100%;
  padding-top: 20px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  padding: 0 20px;
`;

export const StyledColumn = styled.div`
  width: 50%; min-height: 70vh;
  padding: 0 10px;

  &:first-child {
    border-right: 2px solid ${props => props.theme.color.grey.border};
  }
`;

export const StyledFormBtn = styled(Button)`
  position: absolute; top: calc(100% - 100px); left: 50%;
  width: 50%;
  margin-top: 30px;
  transform: translateX(-50%);
`;

export const StyledH3 = styled(H3)`
  margin-left: auto; margin-right: auto;
  font-weight: bold;
`;