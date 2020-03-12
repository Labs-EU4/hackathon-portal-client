
import React from "react";
import styled from "styled-components";
import { Field } from "formik";
import { media } from "../../assets/styles/variables/media";

const SelectField = styled(Field)`
  font-family: ${type.ROBOTO};
  font-size: 16px;
  font-weight: 500;
  color: ${Solid.BLACK};
  border: 1px solid ${Solid.BORDER_GREY};
  border-radius: 6px;
  padding: 10px;
  width: 200px;
  margin: 0 20px 10px 0;

  &:focus {
    outline: 0;
  }

  @media ${media.tablet} {
    width: 100%;
    margin-right: 0;
    align-self: center;
  }
`;

const Select = ({ as = "select", ...inputProps }) => {
  return <SelectField as={as} {...inputProps}></SelectField>;
};

export default Select;
