import styled from "styled-components";
import { media } from "../variables/media";

// export const BodyContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: ${({ justify }) => (justify ? justify : "start")};
//   padding: 60px 45px;

//   @media ${media.tablet} {
//     flex-direction: column;
//     padding: 60px 20px;
//     & > img {
//       display: none;
//     }
//   }
// `;

export const BodyContainerN = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : "start")};
  padding: 60px 45px;

  @media ${media.tablet} {
    flex-direction: column;
    padding: 60px 20px;
    & > img {
      display: none;
    }
  }
`;
