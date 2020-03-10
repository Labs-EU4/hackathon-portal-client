import styled from 'styled-components';

export const BodyContainer = styled.div`
  display: flex; flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.color.white};
  padding: 0;
`;

export const StyledRowBody = styled.div`
  display: flex;
  width: 100%;
  overflow: scroll;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    width: 0; height: 0;
  }
`;

export const HeaderContent = styled.div`
  ${props => props.theme.flex.center};
  width: 100%; height: 33vh;
`;

export const MapContainer = styled.div`
  position: relative;
  width: 70%; height: 90%;
  border: 3px solid ${props => props.theme.color.grey.border};
`;

export const MapFormContainer = styled.div`
  position: absolute; top: 50%; left: 75%;
  transform: translateY(-50%);
  width: 300px; height: 200px;
  background-color: ${props => props.theme.color.white.bg};
  border: 3px solid ${props => props.theme.color.primary.regular}; border-radius: 5px;
`; 