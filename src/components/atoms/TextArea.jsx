import React from "react";
import { Field } from "formik";

import { TextAreaContainer } from "../../assets/styles/atoms/TextAreaStyling";

const TextArea = ({ wide, ...inputProps }) => {
  return (
    <InputField wide>
      <Field {...inputProps} />
    </InputField>
  );
};

export default TextArea;
