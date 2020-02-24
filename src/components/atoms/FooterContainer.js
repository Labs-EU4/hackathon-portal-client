import styled from "styled-components";
import { media } from "../index";

const FooterContainer = styled.div`
  width: 100vw; height: 30px;
  display: flex; flex-direction: row-reverse;
  align-items: center; justify-content: space-between;
  padding-left: 20px;
  
  * > {
    color: white;
  }

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

export default FooterContainer;
