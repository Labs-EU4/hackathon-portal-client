import styled from "styled-components";

export const RowHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.color.grey.border};
  padding: 0 0 5px 0;
  margin: 0 0 10px 0;
  width: 100%;
`;
