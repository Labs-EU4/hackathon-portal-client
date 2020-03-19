import styled from 'styled-components';

export const ExitButton = styled.p`
  ${props => props.theme.flex.center};
  ${props => props.theme.shadow.box};
  position: fixed; top: 77px; left: 35px;
  width: 35px; height: 35px;
  background-image: linear-gradient(to right, 
    ${props => props.theme.color.white.regular} 50%, 
    ${props => props.theme.color.primary.regular} 50%, 
    ${props => props.theme.color.primary.regular} 100%);
  background-size: 204%;
  border-radius: 50%;
  color: ${props => props.theme.color.black.regular};
  transition: all .2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-position: 100%;
    color: ${props => props.theme.color.white.regular};
  }

  ${({ right }) => right && `top: 70px;`}
`;