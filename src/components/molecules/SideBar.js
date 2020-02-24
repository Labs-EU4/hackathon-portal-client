import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Solid, media, type, Gradient } from "../index";
import { ProfileImg } from "../atoms/ProfileImg";
import { Dropdown } from "../atoms/DropDown";
import userImg from '../../assets/images/user_icon.svg';

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    // svg: DashboardIcon
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    // svg: ProfileIcon
  },
  {
    title: "Create Event",
    url: "/dashboard/new",
    // svg: ProfileIcon
  }
];

const SideBar = ({ type }) => {
  const { email: user } = useSelector(state => state.currentUser);
  const initial = user && user[0].toUpperCase();

  if (type === "mobile") {
    return (
      <StyledMobileNav>
        <span>
          {/* <BurgerIcon /> */}
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
        <StyledProfileImage>
          <img src={userImg} />
          {
            user && <Dropdown className="row2tab" />
          }  
        </StyledProfileImage>
        {items.map(({ title, url }) => {
          return (
            <StyledNavLink exact to={url} key={title} activeClassName="current">
              {/* <SvgIcon /> */}
              {title}
            </StyledNavLink>
          );
        })}
      </StyledNav>
    );
};

export default SideBar;

const StyledNav = styled.div`
  ${props => props.theme.flex.custom('start', 'center', 'column')};
  width: 300px; max-width: 300px;
  padding: 90px 40px 40px;

  @media ${media.tablet} {
    width: 50px;
  }

  /* @media ${media.desktop} {
    display: none;
  } */
`;

const StyledProfileImage = styled(ProfileImg)`
  ${props => props.theme.shadow.box};
  width: 150px; height: 150px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

const StyledMobileNav = styled.div`
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
    box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    transition: 0.3s;

    li {
      text-align: center;
      font-size: 12px;
      a,
      span {
        font-weight: bold;
        font-size: 15px;
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

const StyledNavLink = styled(NavLink)`
  ${props => props.theme.flex.center};
  width: 100%;
  color: ${props => props.theme.color.black};
  font-weight: 500;
  text-decoration: none; text-align: center;
  padding: 15px 20px;
  transition: box-shadow 0.2s ease;
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
    ${props => props.theme.shadow.box};
    border-radius: 6px;
    font-weight: bold;
    color: white;

    svg path {
      fill: #868686;
    }
  }
`;
