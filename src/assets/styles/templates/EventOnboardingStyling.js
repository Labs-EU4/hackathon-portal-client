import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.color.white};
`;

export const StyledRowBody = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const HeaderContent = styled.div`
  ${props => props.theme.flex.center};
  width: 100%;
  min-height: calc(100% - 460px);
`;

export const MapContainer = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  min-height: 200px;
  border: 3px solid ${props => props.theme.color.grey.border};
`;

export const MapFormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: calc(100% - 230px);
  transform: translateY(-50%);
  width: 280px;
  min-height: 170px;
  background-color: ${props => props.theme.color.white.bg};
  border: 3px solid ${props => props.theme.color.primary.regular};
  border-radius: 5px;
  z-index: 100;
`;
