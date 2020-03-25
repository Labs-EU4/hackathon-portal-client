import styled from "styled-components";
import { media } from "../../assets/styles/variables/index"
import image from "../../assets/images/Hackton-logo.png";

const Logo = styled.img.attrs({
  alt: "Hackton - Organise hackathons",
  src: image
})`
  height: 43px;
  ${({ size }) => size && `width:${size}; height: 66px;`};

  @media ${media.tablet} {
    height: 35px;
  }

  @media ${media.mobile} {
    height: 30px;
  }
`;

export default Logo;
