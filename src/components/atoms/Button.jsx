import React from "react";

import {
  StyledLink,
  StyledAnchor,
  StyledButton
} from '../../assets/styles/atoms/ButtonStyling';

export default function Button({ children, anchor, link, color, ...props }) {
  if (link) {
    return (
      <StyledLink color={color} {...props}>
        {children}
      </StyledLink>
    );
  } else if (anchor) {
    return (
      <StyledAnchor color={color} {...props}>
        {children}
      </StyledAnchor>
    );
  } else {
    return (
      <StyledButton color={color} {...props}>
        {children}
      </StyledButton>
    );
  }
};