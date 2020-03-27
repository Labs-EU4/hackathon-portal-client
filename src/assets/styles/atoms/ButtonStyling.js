import styled from "styled-components";
import { Link } from "react-router-dom";

import { media } from "../variables/media";
import * as solid from "../variables/colors";

export const StyledButton = styled.button`
  font-family: 'Orbitron', sans-serif !important;
  display: inline-block;
  background-size: 200%;
  outline: none;
  border: 3px solid ${props => props.theme.color.primary.regular};
  border-radius: 3px;
  padding: 8px 28px;
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
  text-align: center; letter-spacing: 1px;
  transition: all 0.5s;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? `disabled` : `pointer`)};
    background-position: -100%;
  }

  ${({ color }) => {
    if (color === "primary")
      return `
        background: ${solid.primary};
        color: ${solid.white};
        transition: transform .2s ease-in-out;

        &:hover {
          border: 3px solid ${solid.primary};
          transform: scale(1.01);
        }
    `;
    if (color === "primary-reverse")
      return `
        background-image: linear-gradient(to right, ${solid.white} 50%, ${solid.primary} 50%, ${solid.primary} 100%);
        border: 2px solid ${solid.primary};
        color: ${solid.primary};

        &:hover {
          color: ${solid.white};
        }
      `;
    if (color === "blue") {
      return `
        background-image: linear-gradient(to right, ${solid.white} 50%, ${solid.spaceBlue} 50%, ${solid.spaceBlue} 100%);
        border: 3px solid ${solid.spaceBlue};
        color: ${solid.spaceBlue};

        &:hover {
          color: ${solid.white};
        }
      `;
    }
    if (color === "green")
      return `
        background-image: linear-gradient(to right, ${solid.white} 50%, ${solid.green} 50%, ${solid.green} 100%);
        border: 3px solid ${solid.green};
        color: ${solid.green};

        &:hover {
          color: ${solid.white};
        }
      `;
    if (color === "grey")
      return `
        background: ${solid.white};
        border: 3px solid ${solid.primary};
        color: ${solid.grey};

        @media ${media.tablet} {
          width: 100%;
          order: 1;
        }

        &:hover {
          background: ${solid.grey};
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

  ${({ disabled }) =>
    disabled && `border: 2px solid lightgrey; color: lightgrey;`};

  ${({ uppercase }) => uppercase && `text-transform: uppercase`};
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  background-size: 200%;
  outline: none;
  border: 3px solid ${props => props.theme.color.primary.regular};
  border-radius: 3px;
  padding: 8px 28px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  text-decoration: none; letter-spacing: 1px;
  transition: all 0.5s;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? `disabled` : `pointer`)};
    background-position: -100%;
  }

  ${({ color }) => {
    if (color === "primary")
      return `
        background: ${solid.primary};
        border: 2px solid white;
        color: ${solid.white};
        transition: transform .2s ease-in-out;

        &:hover {
          border: 2px solid ${solid.primary};
          transform: scale(1.01);
        }
    `;
    if (color === "primary-reverse")
      return `
        background-image: linear-gradient(to right, ${solid.white} 50%, ${solid.primary} 50%, ${solid.primary} 100%);
        border: 2px solid ${solid.primary};
        color: ${solid.primary};

        &:hover {
          color: ${solid.white};
        }
      `;
    if (color === "blue") {
      return `
        background-image: linear-gradient(to right, ${solid.white} 50%, ${solid.spaceBlue} 50%, ${solid.spaceBlue} 100%);
        border: 3px solid ${solid.spaceBlue};
        color: ${solid.spaceBlue};

        &:hover {
          color: ${solid.white};
        }
      `;
    }
    if (color === "green")
      return `
        background-image: linear-gradient(to right, ${solid.white} 50%, ${solid.green} 50%, ${solid.green} 100%);
        border: 3px solid ${solid.green};
        color: ${solid.green};

        &:hover {
          color: ${solid.white};
        }
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

  ${({ disabled }) =>
    disabled && `border: 2px solid lightgrey; color: lightgrey;`};

  ${({ uppercase }) => uppercase && `text-transform: uppercase`};
`;

export const StyledAnchor = styled.a`
  display: inline-block;
  background-size: 200%;
  outline: none;
  border: 3px solid ${props => props.theme.color.primary.regular};
  border-radius: 3px;
  padding: 8px 28px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  text-decoration: none; letter-spacing: 1px;
  transition: all 0.5s;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? `disabled` : `pointer`)};
    background-position: -100%;
  }

  ${({ color }) => {
    if (color === "primary")
      return `
        background: ${solid.primary};
        color: ${solid.white};
        transition: transform .2s ease-in-out;

        &:hover {
          border: 3px solid ${solid.primary};
          transform: scale(1.01);
        }
    `;
    if (color === "primary-reverse")
      return `
        background-image: linear-gradient(to right, ${solid.white} 50%, ${solid.primary} 50%, ${solid.primary} 100%);
        border: 2px solid ${solid.primary};
        color: ${solid.primary};

        &:hover {
          color: ${solid.white};
        }
      `;
    if (color === "blue") {
      return `
        background-image: linear-gradient(to right, ${solid.white} 50%, ${solid.spaceBlue} 50%, ${solid.spaceBlue} 100%);
        border: 3px solid ${solid.spaceBlue};
        color: ${solid.spaceBlue};

        &:hover {
          color: ${solid.white};
        }
      `;
    }
    if (color === "green")
      return `
        background-image: linear-gradient(to right, ${solid.white} 50%, ${solid.green} 50%, ${solid.green} 100%);
        border: 3px solid ${solid.green};
        color: ${solid.green};

        &:hover {
          color: ${solid.white};
        }
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

  ${({ disabled }) =>
    disabled && `border: 2px solid lightgrey; color: lightgrey;`};

  ${({ uppercase }) => uppercase && `text-transform: uppercase`};
`;
