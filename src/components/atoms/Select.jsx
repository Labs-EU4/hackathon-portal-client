import React from "react";
import styled from "styled-components";
import { Field } from "formik";
import { media } from "../../assets/styles/variables/media";

const Select = ({ as = "select", ...inputProps }) => {
  return <S as={as} {...inputProps}></S>;
};

export default Select;

const S = styled(Field)`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.color.black.regular};
  border: 1px solid ${props => props.theme.color.grey.border};
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