import styled from "styled-components";
import { media } from "../variables/index";

export const FooterContainer = styled.div`
  width: 1152px;
  max-width: 1152px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 45px;

  @media ${media.tablet} {
    padding: 0 20px;
    height: 100%;
    max-width: 768px;
    flex-direction: column;
    
    & > div {
      margin: 15px 0 0 0;
    }
  }

  @media ${media.mobile} {
    padding: 0 15px;
    width: 335px;
    flex-direction: column;

    & > div {
      margin: 15px 0 0 0;
    }
  }
`;



// --------------------------------- NEW // --------------------------------- //


export const FooterContainerN = styled.div`
  grid-area: footer;
  ${props => props.theme.flex.center};
  position: relative;
  
  * > {
    color: white;
  }
`;
