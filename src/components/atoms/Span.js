import styled from "styled-components";
import { media } from "../../assets/styles/variables/media";

export const Span = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.color.grey.dark};
`;

export const BoldSpan = styled(Span)`
  font-size: 15px;
  color: ${props => props.theme.color.black.regular};
  margin: 0 5px 0 0;
`;

export const StrikedSpan = styled(Span)`
  &::before {
    content: "";
    display: block;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.color.grey.dark};
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
    border-bottom: 1px solid ${props => props.theme.color.grey.dark};
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