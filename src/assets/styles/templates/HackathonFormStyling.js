import styled from 'styled-components';
import { Form } from "formik";

import Button from "../../../components/atoms/Button";
import { H3 } from "../atoms/HeadingStyling";
import { RowHead } from "../atoms/RowHeadStyling";

export const StyledRowHead = styled(RowHead)`
  margin-bottom: 0;

`;

export const FormContainer = styled.div`
  position: relative;
  width: 100%; height: 100%;
  background-color: ${props => props.theme.color.white.regular};
  padding-top: 20px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  height: calc(100% - 35px);
  padding: 0 20px;
`;

export const StyledColumn = styled.div`
  width: 50%; height: 100%;
  padding: 0 10px 50px;
  overflow: scroll;

  &:first-child {
    border-right: 2px solid ${props => props.theme.color.grey.border};
  }

  &:last-child {
    margin-bottom: 30px;
  }
`;

export const StyledFormBtn = styled(Button)`
  position: absolute; top: calc(100% - 80px); left: 50%;
  width: 50%;
  margin-top: 30px;
  transform: translateX(-50%);
`;

export const StyledH3 = styled(H3)`
  margin-left: auto; margin-right: auto;
  font-weight: bold;
`;