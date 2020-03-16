import styled from "styled-components";
import { media } from "../variables/index";

export const HeaderContainerO = styled.div`
  width: 100%;
  height: 90px;
  padding: 0 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${media.tablet} {
    padding: 0 20px;
    height: 80px;
  }

  @media ${media.mobile} {
    padding: 0 15px;
    height: 60px;
  }
`;



// --------------------------------- NEW // --------------------------------- //

// import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%; min-height: 60px;
  padding-left: 20px;
  display: flex;
  grid-area: header;
  align-items: center;
  justify-content: space-between;
`;
