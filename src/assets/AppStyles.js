import styled from 'styled-components';

import { media } from './styles/variables/media';

export const AppContainer = styled.main`
  position: absolute;
  display: grid;
  grid-template-columns: ${({ active }) => active 
    ? "20px auto auto 60px" 
    : "20px auto auto 250px"};
  grid-template-rows: 60px auto auto 25px;
  grid-template-areas:
    " header header header aside"
    "  gap    main   main  aside"
    "  gap    main   main  aside"
    " footer footer footer aside";
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
`;

export const RoutesContainer = styled.div`
  ${props => props.theme.shadow.box};
  position: relative;
  grid-area: main;
  background: transparent;
  border-radius: 5px;
  overflow: hidden;

  @media ${media.tablet} {
    width: calc(100vw - 80px);
  }

  &::-webkit-scrollbar {
    width: 0px;
    height: 0;
  }
`;