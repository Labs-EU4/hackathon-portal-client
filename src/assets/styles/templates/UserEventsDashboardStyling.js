import styled from 'styled-components';

import { RowHead } from "../atoms/RowHeadStyling";
import { RowBody } from "../atoms/RowBodyStyling";
import { H4 } from "../atoms/HeadingStyling";
import Button from '../../../components/atoms/Button';

export const BodyContainer = styled.div`
  display: flex; flex-direction: column;
  width: 100%;
  /* background-color: ${props => props.theme.color.white.regular}; */
  background-color: rgba(0, 0, 0, .8);
  padding: 60px 45px;
  overflow: scroll;
`;

export const StyledRowHead = styled(RowHead)`
  justify-content: flex-start;
  border-bottom: 2px solid ${props => props.theme.color.primary.regular};
  padding-bottom: 0; margin-bottom: 0;
`;

export const DashboardContent = styled(RowBody)`
  height: calc(100vh - 185px);
  margin: 0;
  overflow-y: scroll;
`;

export const StyledButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${props => props.theme.color.primary.regular};
  border-bottom: none; 
  border-bottom-left-radius: 0; border-bottom-right-radius: 0;
  margin-right: 10px; 
  font-size: 14px;
  color: rgb(0, 255, 70);
  /* margin-bottom: -4px; */

  &:hover {
    background-color: ${props => props.theme.color.primary.regular};
    border: 2px solid ${props => props.theme.color.primary.regular};
    border-bottom: none;
    color: ${props => props.theme.color.white.regular};
  }

  &:focus {
    background-color: ${props => props.theme.color.primary.regular};
    color: ${props => props.theme.color.white.regular};
  }

  /*&.current {
    background-color: ${props => props.theme.color.primary.regular};
  } */

  ${({ gap }) => gap === 1 && `margin-left: 10px;` }
  ${({ bottomSpace }) => bottomSpace === 1 && `
      margin-bottom: 0px;
      border-bottom: 0px;
  `}
`;

export const HackathonCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const StyledH4 = styled(H4)`
  margin: 70px auto;
  color: rgb(0, 255, 70);
`;
