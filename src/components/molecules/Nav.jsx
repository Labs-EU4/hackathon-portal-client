import React, { useState } from "react";
import { useSelector } from "react-redux";
// import uuid from 'uuid';

import {
  StyledEditIcon,
  StyledExpandIcon,
  UserInfoContent,
  StyledNav,
  StyledProfileImage,
  StyledNavLink,
  LinkDetails,
  UserContainer,
  StyledButton
} from "../../assets/styles/molecules/NavStyling";
import ProfileImg from "../atoms/ProfileImg";
import Icon from "../atoms/Icon";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    svg: DashboardIcon
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    svg: ProfileIcon
  }
];

const Nav = ({ type }) => {
  if (type === "mobile") {
    return (
      <StyledMobileNav>
        <span>
          <BurgerIcon />
          Menu
        </span>
        <ul>
          {items.map(({ title, url }) => {
            return (
              <li key={title}>
                <StyledNavLink to={url}>{title}</StyledNavLink>
              </li>
            );
          })}
        </ul>
      </StyledMobileNav>
    );
  } else
    return (
      <StyledNav>
        {items.map(({ title, url, svg: SvgIcon }) => {
          return (
            <StyledNavLink exact to={url} key={title} activeClassName="current">
              <SvgIcon />
              {title}
            </StyledNavLink>
          );
        })}
      </StyledNav>
    );
};

export default Nav;

