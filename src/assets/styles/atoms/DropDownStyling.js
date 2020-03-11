import styled from "styled-components";

export const UL = styled.ul`
  position: relative;
  top: 40px;
  right: -25px;
  padding: 5px;
  list-style: none;
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.theme.color.white.regular};
  border-radius: 6px;
  transition: 0.3s;
  
  li {
    text-align: center;
    font-size: 12px;
    
    a, span {
      font-weight: bold;
      font-size: 15px;
      padding: 15px 20px;
      text-decoration: none;
      color: ${props => props.theme.color.grey.regular};
      display: block;
      
      &:hover {
        background: ${props => props.theme.color.primary.regular};
        color: ${props => props.theme.color.white.regular};
        transition: all 0.3s;
      }
    }
  }
`;