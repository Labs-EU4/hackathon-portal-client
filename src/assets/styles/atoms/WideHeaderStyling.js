import styled from "styled-components";
import { media, Solid } from "../variables/index";
export const WideHeader = styled.div`
  display: flex;
  justify-content: center;

  @media ${media.mobile} {
    min-width: 335px;
  }
`;
