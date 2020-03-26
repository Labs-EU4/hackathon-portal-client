import styled from "styled-components";

import { media } from '../variables/media';

export const Span = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.color.grey.dark};
`;

export const BoldSpan = styled(Span)`
  margin-bottom: 5px;
  font-size: 15px;
  color: ${props => props.theme.color.black.regular};
  text-transform: uppercase;
`;

export const NormalSpan = styled.span`
  margin-bottom: 5px;
  font-size: 14px; font-weight: normal;
  color: ${props => props.theme.color.white.regular};
  text-transform: uppercase;
`;

export const StrikedSpan = styled(Span)`
  color: ${props => props.theme.color.primary.regular};
  &::before {
    content: "";
    display: block;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.color.primary.regular};
    position: relative;
    top: 9px;
    left: -120%;

    @media ${media.tablet} {
      width: 70%;
      left: -90%;
    }
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.color.primary.regular};
    position: relative;
    top: -9px;
    left: 120%;

    @media ${media.tablet} {
      width: 70%;
      right: 90%;
    }
  }
`;

export const ErrorSpan = styled(Span)`
  color: ${props => props.theme.color.danger};
  margin: 0 0 10px 0;
  display: inline-block;
`;