import styled from 'styled-components';

import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import Button from '../../../components/atoms/Button';

export const BodyContainer = styled.div`
  display: flex; flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.color.white};
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
  margin-right: 10px;
  border: 2px solid ${props => props.theme.color.primary.regular};
  border-bottom: none;

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

  ${({gap}) => gap === true && `margin-left: 10px;` }
`;

export const HackathonCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;