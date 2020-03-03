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
`;

export default FooterContainer;
