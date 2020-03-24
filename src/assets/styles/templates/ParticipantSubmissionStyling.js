
import { WideBody } from "../atoms/WideBodyStyling";
import styled from "styled-components";

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