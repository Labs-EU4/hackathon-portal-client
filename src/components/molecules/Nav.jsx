import React from "react";
import { ReactComponent as DashboardIcon } from "./../../assets/images/link-dashboard-icon.svg";
import { ReactComponent as ProfileIcon } from "./../../assets/images/link-profile-icon.svg";
import { ReactComponent as BurgerIcon } from "../../assets/images/link-burger-icon.svg";
import { StyledNav, StyledMobileNav, StyledNavLink } from "../../assets/styles/molecules/NavStyling";

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

