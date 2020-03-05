import styled from "styled-components";
import { media } from "../variables/media";
import Icon from '../atoms/Icon';

export const StyledLogo = styled.figure`
  ${props => props.theme.flex.custom('flex-start', 'center')};
  position: relative;
  padding-left: 42px;

  p { 
    font-size: 4rem;
    color: ${props => props.theme.color.white.regular};
    ${({ size }) => size && `font-size:${size}`}
  }
`;

export const StyledAimIcon = styled(Icon)`
  position: absolute; top: 50%; left: 0;
  font-size: 4.5rem;
  transform: translateY(-50%);
  color: ${props => props.theme.color.blue.regular};
  opacity: .3;
`;

export const StyledLaptopIcon = styled(Icon)`
  position: absolute; top: 50%; left: 12.5px;
  font-size: 1.4rem;
  transform: translateY(-48%);
  color: ${props => props.theme.color.white.regular};
  z-index: 1000;
`;