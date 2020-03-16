import styled from "styled-components";
import { Solid } from "../variables/index";

export const RowHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Solid.BORDER_GREY};
  padding: 0 0 10px 0;
  margin: 0 0 40px 0;
  width: 100%;
`;


// --------------------------------- NEW --------------------------------- //


export const RowHeadN = styled.div`
  ${props => props.theme.flex.custom('space-between', 'center')};
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.grey.border};
  margin-bottom: 10px;
  ${({ center }) => center && `justify-content: center`};
  ${({ bold }) => bold && `
    & * {
      font-weight: bold
    }
  `};
`;