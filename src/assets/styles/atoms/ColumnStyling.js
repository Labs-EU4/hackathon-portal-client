import styled from 'styled-components';
import { media } from "../GlobalStyles";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  @media ${media.tablet} {
    width: 100%;
  }
`;