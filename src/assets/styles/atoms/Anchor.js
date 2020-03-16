import styled from 'styled-components';
import { type, smallFontSize, baseFontSize, Solid } from "../variables/index";

export const Anchor = styled.a`
  font-family: ${type.ROBOTO_MONO};
  font-size: ${smallFontSize};
  font-weight: 500;
  color: ${Solid.BLACK};
  text-decoration: none;
  border-bottom: 1px solid ${Solid.BLACK};
  &:hover {
    color: #212121;
  }
`;

export const TopNavAnchor = styled(Anchor)`
  font-size: ${baseFontSize};
  border: 0;
  padding: 10px;
  margin: 0 10px 0 0;
  &:hover {
    border-bottom: 1px solid ${Solid.BLACK};
    transition: all 3s;
  }
`;

export const FooterNavAnchor = styled(Anchor)`
  color: ${Solid.DARK_GREY};
  padding: 10px;
  border: 0;
  &:hover {
    border-bottom: 1px solid ${Solid.DARK_GREY};
    transition: all 3s;
  }
`;

// --------------------------------- NEW // --------------------------------- //


export const AnchorN = styled.a`
  ${props => props.theme.fontSize.small};
  font-weight: 500;
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.color.black.regular};
  &:hover {
    color: ${props => props.theme.color.black.light};
  }
`;

export const TopNavAnchorN = styled(AnchorN)`
  ${props => props.theme.fontSize.base};
  border: 0;
  padding: 10px;
  margin: 0 10px 0 0;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.color.black.regular};
    transition: all 3s;
  }
`;

export const FooterNavAnchorN = styled(AnchorN)`
  border: 0;
  padding: 3px 5px 5px; 
  font-weight: bold;
  color: ${props => props.theme.color.black.regular};
  &:hover {
    border-top: 3px solid ${props => props.theme.color.white.regular};
    color: ${props => props.theme.color.white.regular};
  }
`;