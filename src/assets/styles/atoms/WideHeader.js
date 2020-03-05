import styled from "styled-components";

import { media } from '../variable/media';

const WideHeader = styled.div`
  display: flex; justify-content: center;

  @media ${media.mobile} {}
`;

export default WideHeader;
