import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { type, smallFontSize, Gradient, Solid, media } from "../index";

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
  padding: 12px 22px;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: 600;
  color: ${props => props.theme.color.black.regular};
  white-space: nowrap;
  text-align: center;
  text-decoration: none;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? `disabled` : `pointer`)};
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
        background: ${Gradient.BLUE};
        color: ${Solid.WHITE};
        padding: 14px 22px;
        border: 0;
    `;
    }
    if (color === "green")
      return `
        background: ${props => props.theme.color.green.regular};
        border: 0;
        padding: 14px 22px;
        color: ${Solid.WHITE};
    `;
    if (color === "grey")
      return `
        background: ${props => props.theme.color.grey.regular};
        border: 0;
        padding: 14px 22px;
        color: ${Solid.WHITE};

        @media ${media.tablet} {
          width: 100%;
          order: 1;
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
  padding: 12px 22px;
  margin: 0;
  border-radius: 6px;
  border: 0;
  font-size: ${smallFontSize};
  font-weight: 500;
  color: ${Solid.BLACK};
  border: 2px solid ${Solid.BLACK};
  background: ${Solid.WHITE};
  outline: none;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

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
        background: ${Gradient.BLUE};
        color: ${Solid.WHITE};
        padding: 14px 22px;
        border: 0;
    `;
    }
    if (color === "green")
      return `
        background: ${Gradient.GREEN};
        border: 0;
        padding: 14px 22px;
        color: ${Solid.WHITE};
    `;
    if (color === "grey")
      return `
        background: ${Gradient.GREY};
        border: 0;
        padding: 14px 22px;
        color: ${Solid.WHITE};

        @media ${media.tablet} {
          width: 100%;
          order: 1;
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
