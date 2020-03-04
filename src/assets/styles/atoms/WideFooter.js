import styled from "styled-components";
import { media } from '../../assets/styles/variables/media';

const WideFooter = styled.div`
  display: flex;
  justify-content: center;

  @media ${media.mobile} {
    min-width: 335px;
  }
`;

export default WideFooter;
