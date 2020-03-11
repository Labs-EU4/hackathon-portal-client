import styled from "styled-components";
import { media } from "../variables/media";

const FooterContainer = styled.div`
  grid-area: footer;
  ${props => props.theme.flex.center};
  position: relative;
  
  * > {
    color: white;
  }
`;

export default FooterContainer;
