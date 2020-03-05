import React from 'react';
// import image from "./../../assets/images/Hackton-logo.png";
import {
  StyledLogo,
  StyledAimIcon,
  StyledLaptopIcon
} from '../../assets/styles/atoms/Logo';

const Logo = ({ size }) => {
  return (
    <StyledLogo {...{size}}>
      <StyledAimIcon icon="crosshairs"/>
      <StyledLaptopIcon icon="laptop-code"/>
      <p>HackHunt</p>
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