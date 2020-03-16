import styled from 'styled-components';
import { media } from "../variables/index";

export const ColumnO = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  @media ${media.tablet} {
    width: 100%;
  }
`;

// --------------------------------- NEW // --------------------------------- //

// import styled from 'styled-components';

export const Column = styled.div`
  ${props => props.theme.flex.custom('center', 'flex-start', 'column', 'wrap')};
  @media ${media.tablet} {
    width: 100%;
  }
`;