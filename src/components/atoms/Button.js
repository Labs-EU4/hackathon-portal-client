import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { type, smallFontSize, Gradient, Solid, media } from "../index";
import * as solid from '../../assets/styles/variables/colors';

export default function Button({ children, anchor, color, ...props }) {
  if (anchor) {
    return (
      <StyledLink color={color} {...props}>
        {children}
      </StyledLink>
    );
  } else
    return (
      <StyledButton color={color} {...props}>
        {children}
      </StyledButton>
    );
}

const StyledButton = styled.button`
  display: inline-block;
  background: white;
  outline: none;
  border: 3px solid ${props => props.theme.color.grey.border};
  border-radius: 3px;
  padding: 8px 22px;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: 600;
  color: ${props => props.theme.color.black.regular};
  white-space: nowrap;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? `disabled` : `pointer`)};
    border: 3px solid ${props => props.theme.color.primary.regular};
  }

  @media ${media.tablet} {
    width: 100%;
    padding: 12px;
    margin: 0 0 15px 0;
  }

  @media ${media.mobile} {
    padding: 10px;
  }

  ${({ color }) => {
    if (color === "blue") {
      return `
        background: ${solid.blue};
        border: 3px solid transparent;
        color: ${solid.white};
    `;
    }
    if (color === "green")
      return `
        background: ${solid.green};
        color: ${solid.white};
    `;
    if (color === "grey")
      return `
        background: ${solid.white};
        border: 3px solid ${solid.grey};
        color: ${solid.grey};

        @media ${media.tablet} {
          width: 100%;
          order: 1;
        }

        &:hover {
          background: ${solid.grey};
          border: 3px solid ${solid.grey};
          color: ${solid.white};
        }
      `;
  }};

  ${({ size }) => {
    if (size === "wide") {
      return `
        width: 100%;
      `;
    } else if (size === "half") {
      return `
        width: 47%;
      `;
    }
  }};
`;

const StyledLink = styled(Link)`
  display: inline-block;
  background: white;
  outline: none;
  border: 3px solid ${props => props.theme.color.grey.border};
  border-radius: 3px;
  padding: 8px 22px;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: 600;
  color: ${props => props.theme.color.black.regular};
  white-space: nowrap;
  text-align: center;
  text-decoration: none; text-transform: uppercase;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? `disabled` : `pointer`)};
  }

  @media ${media.tablet} {
    padding: 12px;
  }

  @media ${media.mobile} {
    padding: 10px;
  }

  ${({ color }) => {
    if (color === "blue") {
      return `
        background: ${solid.blue};
        color: ${solid.white};
    `;
    }
    if (color === "green")
      return `
        background: ${solid.green};
        color: ${solid.white};
      `;
    if (color === "grey")
      return `
        background: ${solid.white};
        border: 3px solid ${solid.grey};
        color: ${solid.grey};

        @media ${media.tablet} {
          width: 100%;
          order: 1;
        }

        &:hover {
          background: ${solid.grey};
          border: 3px solid ${solid.grey};
          color: ${solid.white};
        }
      `;
  }};

  ${({ size }) => {
    if (size === "wide") {
      return `
        width: 100%;
      `;
    }
  }};
`;
