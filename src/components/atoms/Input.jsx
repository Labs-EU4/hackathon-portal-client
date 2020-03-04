import React from "react";

import { StyledInput } from '../../assets/styles/atoms/Input';

const Input = ({ ...inputProps }) => {
  return <StyledInput {...inputProps} />;
};

export default Input;