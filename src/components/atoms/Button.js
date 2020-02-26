import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { type, smallFontSize, Gradient, Solid, media } from "../index";
import * as colors from '../../assets/styles/variables/colors';

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
        background: ${Gradient.BLUE};
        border: 3px solid transparent;
        color: ${Solid.WHITE};
    `;
    }
    if (color === "green")
      return `
        background: ${colors.green};
        color: ${Solid.WHITE};
    `;
    if (color === "grey")
      return `
        background: ${colors.white};
        border: 3px solid ${colors.grey};
        color: ${colors.grey};

        @media ${media.tablet} {
          width: 100%;
          order: 1;
        }

        &:hover {
          background: ${colors.grey};
          border: 3px solid ${colors.grey};
          color: ${Solid.WHITE};
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
        background: ${Gradient.BLUE};
        color: ${Solid.WHITE};
    `;
    }
    if (color === "green")
      return `
        background: #00c4cc;
        color: ${Solid.WHITE};
      `;
    if (color === "grey")
      return `
        background: ${colors.white};
        border: 3px solid ${colors.grey};
        color: ${colors.grey};

        @media ${media.tablet} {
          width: 100%;
          order: 1;
        }

        &:hover {
          background: ${colors.grey};
          border: 3px solid ${colors.grey};
          color: ${Solid.WHITE};
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
