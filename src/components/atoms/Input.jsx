import React from "react";

import { StyledInput } from "../../assets/styles/atoms/InputStyling";

const Input = ({ ...inputProps }) => {
  return <StyledInput {...inputProps} />;
};

export default Input;
