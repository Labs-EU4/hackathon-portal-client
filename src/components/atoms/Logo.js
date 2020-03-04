import React from 'react';
import styled from "styled-components";
import { media } from "../../assets/styles/variables/media";
import image from "./../../assets/images/Hackton-logo.png";
import Icon from '../atoms/Icon';

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

const StyledLogo = styled.figure`
  ${props => props.theme.flex.custom('flex-start', 'center')};
  position: relative;
  padding-left: 42px;

  p { 
    font-size: 4rem;
    color: ${props => props.theme.color.white.regular};
    ${({ size }) => size && `font-size:${size}`}
  }
`;

const StyledAimIcon = styled(Icon)`
  position: absolute; top: 50%; left: 0;
  font-size: 4.5rem;
  transform: translateY(-50%);
  color: ${props => props.theme.color.blue.regular};
  opacity: .3;
`;

const StyledLaptopIcon = styled(Icon)`
  position: absolute; top: 50%; left: 12.5px;
  font-size: 1.4rem;
  transform: translateY(-48%);
  color: ${props => props.theme.color.white.regular};
  z-index: 1000;
`;