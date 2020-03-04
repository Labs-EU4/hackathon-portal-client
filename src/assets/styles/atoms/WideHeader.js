import styled from "styled-components";
import { media } from '../../assets/styles/variables/media';

const WideHeader = styled.div`
  display: flex; justify-content: center;

  @media ${media.mobile} {}
`;

export default WideHeader;
