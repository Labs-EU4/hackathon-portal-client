import React from "react";
import { Field } from "formik";

import { TextAreaContainer } from "../../assets/styles/atoms/TextAreaStyling";

const TextArea = ({ wide, tall, ...inputProps }) => {
  return (
    <TextAreaContainer wide tall>
      <Field {...inputProps} />
    </TextAreaContainer>
  );
};

export default TextArea;
