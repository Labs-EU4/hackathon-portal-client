import styled from "styled-components";

import { WideBody } from "../atoms/WideBodyStyling";
import { H3 } from "../atoms/HeadingStyling";
import { Label } from "../atoms/LabelStyling";
import { Paragraph } from "../atoms/ParagraphStyling";

export const StyledWideBody = styled(WideBody)`
  ${props => props.theme.flex.center};
  ${props => props.theme.shadow.box};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 300;
`;

export const StyledH3 = styled(H3)`
  color: rgb(0, 255, 70);
`;

export const StyledLabel = styled(Label)`
  color: rgb(0, 255, 70);
`;

export const StyledParagraph = styled(Paragraph)`
  letter-spacing: .9px;
  color: white; 

  span {
    font-weight: bold;
    color: rgb(0, 255, 70);
  }
`;