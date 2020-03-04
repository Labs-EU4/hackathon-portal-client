import styled from 'styled-components';
import { media } from "../../../components/index";

export const Column = styled.div`
  ${props => props.theme.flex.custom('center', 'flex-start', 'column', 'wrap')};

  @media ${media.tablet} {
    width: 100%;
  }
`;