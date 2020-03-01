import styled from "styled-components";
import { media } from "../../assets/styles/variables/media";

const FooterContainer = styled.div`
  ${props => props.theme.flex.center};
  position: relative;
  width: 100%; height: 30px;
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
