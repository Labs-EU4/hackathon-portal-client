import styled from "styled-components";

export const FooterContainer = styled.div`
  grid-area: footer;
  ${props => props.theme.flex.center};
  position: relative;

  * > {
    color: white;
  }
`;