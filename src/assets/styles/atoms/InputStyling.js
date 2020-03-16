import { Field } from "formik";
import styled from "styled-components";

import { media } from "../variables/media";

export const StyledInput = styled(Field)`
  width: 180px;
  border: 1px solid ${props => props.theme.color.grey.border};
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 10px;
  color: ${props => props.theme.color.black.regular};
  font-size: 16px;
  font-weight: 500;

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

  &[type="date"] {
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
