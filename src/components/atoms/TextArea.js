import React from "react";
import styled from "styled-components";
import { Field } from "formik";

const I = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ wide }) =>
    wide &&
    `
    width: 100%;
  `};
  textarea {
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.color.black.regular};
    border: 1px solid ${props => props.theme.color.grey.border};
    border-radius: 6px;
    padding: 10px;
    margin: 0 0 10px 0;
    min-height: 100px;

    &:focus {
      transition: all 0.5s;
      box-shadow: 0 0 3px #ddd;
      outline: 0;
    }

    ${({ wide }) => wide && `width: 100%`};
    ${({ tall }) => tall && `min-height: 200px`};
  }
`;

const TextArea = ({ wide, tall, ...inputProps }) => {
  return (
    <I wide tall>
      <Field {...inputProps} />
    </I>
  );
};

export default TextArea;
