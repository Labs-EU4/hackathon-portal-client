import styled from "styled-components";
import { media, Solid } from "../variables/index";

export const WideFooterO = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${Solid.BORDER_GREY};
  background-color: ${Solid.GREY};

  @media ${media.mobile} {
    min-width: 335px;
  }
`;


// --------------------------------- NEW // --------------------------------- //

// import styled from "styled-components";

// import { media } from '../variables/media';

export const WideFooter = styled.div`
  display: flex;
  justify-content: center;
  @media ${media.mobile} {
    min-width: 335px;
  }
`;
