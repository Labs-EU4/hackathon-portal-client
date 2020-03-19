import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../../../components/atoms/Button";
import Icon from "../../../components/atoms/Icon";
import { Solid, media, type, Gradient } from "../variables/index";

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

// --------------------------------- NEW // --------------------------------- //

export const StyledEditIconN = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2.5rem;
  color: ${props => props.theme.color.green.regular};
  z-index: 500;
  transform: translate(-40%, -50%);
`;

export const StyledExpandIconN = styled(Icon)`
  position: absolute;
  bottom: 70px;
  left: 50%;
  font-size: 3rem;
  transform: ${({ active }) =>
    active
      ? "translateX(-50%) rotate(90deg);"
      : "translateX(-50%) rotate(-90deg);"};
  cursor: pointer;
  &:hover {
    transform: ${({ active }) =>
      active
        ? "translateX(-50%) rotate(90deg) scale(1.1);"
        : "translateX(-50%) rotate(-90deg) scale(1.1);"};
    color: ${props => props.theme.color.white.regular};
  }
  @media ${media.tablet} {
    display: none;
  }
`;

export const UserInfoContentN = styled.div`
  margin-left: 5px;
  p {
    &:last-child {
      ${props => props.theme.fontSize.smaller};
      color: ${props => props.theme.color.grey.regular};
    }
  }
  @media ${media.tablet} {
    display: none;
  }
`;

export const StyledNavN = styled.div`
  grid-area: aside;
  position: relative;
  padding: ${({ active }) => (active ? "90px 0" : "90px 20px 30px")};
  @media ${media.tablet} {
    width: 60px;
    padding: 90px 0;
  }
  &:first-child {
    margin-top: 10px;
  }
`;

export const StyledProfileImageN = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;

  &:hover img {
    opacity: 0.4;
  }
`;

export const StyledNavLinkN = styled(NavLink)`
  ${props => props.theme.flex.custom("flex-start", "flex-end")};
  width: 100%;
  margin-bottom: 10px; padding: 12px 0 8px 5px;
  color: ${props => props.theme.color.black.regular};
  font-weight: 600;
  text-decoration: none; text-align: left;
  transition: box-shadow 0.2s ease;
  white-space: nowrap;
  @media ${media.tablet} {
    span {
      display: none;
    }
  }
  svg {
    color: ${props => props.theme.color.white.regular};
    margin: 0 5px 0 12px;
  }
  svg path {
    fill: #9d9d9d;
    fill: ${props => props.theme.color.black.regular};
  }
  &:hover {
    background-color: ${props => props.theme.color.link.hover};
  }
  &:hover + div {
    visibility: visible;
  }
  &.current {
    ${props => props.theme.shadow.box};
    font-weight: bold;
    color: white;
    ${({ active }) =>
      active
        ? `border-right: 5px solid ${Solid.blue}; border-radius: 0px; padding-left: 10px;`
        : `border-left: 5px solid ${Solid.blue}; border-radius: 6px;`}
    @media ${media.tablet} {
      border-right: 5px solid ${Solid.blue}; border-left: none;
      border-radius: 0px; 
      padding-left: 10px;
    }
    svg {
      margin: 0 5px;
    }
    svg path {
      fill: ${props => props.theme.color.white.regular};
    }
  } 
`;

export const LinkDetailsN = styled.div`
  ${props => props.theme.flex.center};
  ${props => props.theme.shadow.box};
  position: absolute;
  top: 50%;
  height: 45px;
  background-color: #3bcef2;
  border: 2px solid ${props => props.theme.color.primary.regular};
  border-right: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 0 20px;
  transform: translate(-100%, -60%);
  z-index: 100;
  visibility: hidden;
`;

export const UserContainerN = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px 2px;
  border-radius: 2.5px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.color.link.hover};
  }
`;

export const StyledButtonN = styled(Button)`
  margin-bottom: 10px;
  ${({ active }) =>
    active &&
    `
    padding: 5px 0;
    word-break: break-all;
  `}
  @media ${media.tablet} {
    display: none;
  }
  &:hover {
    border: 3px solid ${props => props.theme.color.primary.regular};
  }
`;
