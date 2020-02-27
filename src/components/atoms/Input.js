import React from "react";
import styled from "styled-components";
import { media } from "../../assets/styles/variables/media";
import { Field } from "formik";

const I = styled(Field)`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.color.black.regular};
  border: 1px solid ${props => props.theme.color.grey.border};
  border-radius: 6px;
  padding: 10px;
  width: 180px;
  margin: 0 0 10px 0;

  &:focus {
    transition: all 0.5s;
    box-shadow: 0 0 3px #ddd;
    outline: 0;
  }

  ${({ display }) =>
    display === "wide" &&
    `
    width: 100%;
  `};

  &[type=date] {
    width: 250px;

    @media ${media.tablet} {
      width: 100%;
      margin-right: 0;
    }
  }

  @media ${media.tablet} {
    width: 100%;
    margin-right: 0;
  }

  @media ${media.mobile} {
    align-self: center;
  }
`;

const Input = ({ ...inputProps }) => {
  return <I {...inputProps} />;
};

export default Input;
