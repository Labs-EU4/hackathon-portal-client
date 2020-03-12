import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Solid, media, type, Gradient } from "../GlobalStyles";

export const StyledNav = styled.div`
display: none;
border-right: 1px solid #dadada;
background-color: #fafafa;
display: flex;
flex-direction: column;
padding: 40px;
width: 350px;
transition: all 0.3s;

@media ${media.mobile} {
  display: block;
}

@media ${media.tablet} {
  display: block;
}

@media ${media.desktop} {
  display: none;
}
`;

export const StyledMobileNav = styled.div`
display: block;

@media (min-width: 1152px) {
  display: none;
}

span {
  display: flex;
  color: ${Solid.DARK_GREY};
  font-weight: 500;
  margin: 0 20px 0 0;

  svg {
    width: 25px;
    margin: 0 5px 0 0;

    path {
      fill: #9d9d9d;
    }
  }
}

span:hover {
  cursor: pointer;
}

ul {
  display: none;
  padding: 5px;
  list-style: none;
  z-index: 1;
  position: absolute;
  flex-direction: column;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  border-radius: 6px;
  transition: 0.3s;

  li {
    text-align: center;
    font-size: 12px;
    a,
    span {
      font-weight: bold;
      font-size: 15px;
      font-family: ${type.ROBOTO};
      padding: 15px 20px;
      text-decoration: none;
      color: ${Solid.DARK_GREY};
      display: block;

      &:hover {
        background: ${Gradient.BLUE};
        color: ${Solid.WHITE};
        transition: all 0.3s;
      }
    }
  }
}

&:hover {
  ul {
    display: flex;
  }
}
`;

export const StyledNavLink = styled(NavLink)`
display: flex;
align-items: center;
background-size: 20px;
color: ${Solid.DARK_GREY};
font-weight: 500;
text-decoration: none;
padding: 15px 20px;
transition: all 0.3s;
margin: 0 0 10px 0;
white-space: nowrap;

svg {
  margin: 0 15px 0 0;
  width: 20px;
}

svg path {
  fill: #9d9d9d;
}

&:hover,
&.current {
  background-color: #efefef;
  border-radius: 6px;
  color: #484848;

  svg path {
    fill: #868686;
  }
}
`;
