import styled from "styled-components";
import { media } from "../../assets/styles/variables/media";

export const ProfileImg = styled.div`
  position: relative;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color.white.regular};
  border-radius: 50px;
  width: 45px;
  height: 45px;
  ul {
    display: none;
      li {
        display: none;
      }
  }
  &:hover {
    cursor: pointer;
    ul {
      display: flex;
      flex-direction: column;
      li {
        display: block;
      }
    }
  }
  
  @media ${media.tablet} {
    width: 35px;
    height: 35px;
  }
  
  @media ${media.mobile} {
    width: 30px;
    height: 30px;
  }
`;
