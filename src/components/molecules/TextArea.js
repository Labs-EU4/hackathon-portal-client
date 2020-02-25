import React from "react";
import { Field } from "formik";
import { InputField } from "../styles/molecules/TextAreaStyling";

const TextArea = ({ wide, ...inputProps }) => {
  return (
    <InputField wide>
      <Field {...inputProps} />
    </InputField>
  );
};

export default TextArea;
