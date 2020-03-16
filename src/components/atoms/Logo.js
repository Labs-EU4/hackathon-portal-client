import React from "react";
import {
  StyledLogo,
  StyledAimIcon,
  StyledLaptopIcon
} from "../../assets/styles/atoms/Logo";

const Logo = ({ size }) => {
  return (
    <StyledLogo {...{ size }}>
      <StyledAimIcon icon="crosshairs" alt="Hackton - Organise hackathons" />
      <StyledLaptopIcon
        icon="laptop-code"
        alt="Hackton - Organise hackathons"
      />
    </StyledLogo>
  );
};

export default Logo;

// const Logo = styled.img.attrs({
//   alt: "Hackton - Organise hackathons",
//   src: image
// })`
//   height: 43px;

//   @media ${media.tablet} {
//     height: 35px;
//   }

//   @media ${media.mobile} {
//     height: 30px;
//   }
// `;
