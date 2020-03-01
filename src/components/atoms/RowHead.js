import styled from "styled-components";

export const RowHead = styled.div`
  ${props => props.theme.flex.custom('space-between', 'center')};
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.grey.border};
  margin-bottom: 10px;

  ${({ center }) => center && `justify-content: center`};
  ${({ bold }) => bold && `font-weight: bold`};
`;
