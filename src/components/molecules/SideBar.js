import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Solid, media, type, Gradient } from "../index";
// import { ProfileImg } from "../atoms/ProfileImg";
import Button from '../atoms/Button';
import userImg from '../../assets/images/user_icon.svg';

const items = [
  {
    title: "Home",
    url: "/",
    // svg: DashboardIcon
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    // svg: DashboardIcon
  },
  {
    title: "About",
    url: "/about",
    // svg: ProfileIcon
  }
];

const SideBar = ({ type, setIsProfileOpen, isProfileOpen }) => {
  const { email, fullname } = useSelector(state => state.currentUser);
  // const initial = user && user[0].toUpperCase();

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
        <UserContainer 
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <StyledProfileImage>
              <img src={userImg} />
              <UserInfoContent>
                <p>{fullname}Alexander</p>
                <p>{email}</p>
              </UserInfoContent>
            {/* {
              user && <Dropdown className="row2tab" />
            }   */}
          </StyledProfileImage>
        </UserContainer>
        <StyledButton
          exact 
          anchor
          to="/dashboard/new" 
          color="green"
          size="wide"
          activeClassName="current"
        >Create Event</StyledButton>
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


const UserInfoContent = styled.div`
  margin-left: 5px;
`;

const StyledNav = styled.div`
  ${props => props.theme.flex.custom('start', 'center', 'column')};
  width: 250px; max-width: 300px;
  padding: 90px 20px 30px;

  @media ${media.tablet} {
    width: 50px;
  }

  &:first-child {
    margin-top: 10px;
  }
`;

const StyledProfileImage = styled.div`
  ${props => props.theme.shadow.box};
  display: flex; align-items: center;
  width: 50px; height: 50px;
  background-color: transparent;
  border-radius: 50%;

  img {
    width: 100%;
  }
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
  ${props => props.theme.flex.custom('flex-start', 'center')};
  width: 100%;
  margin-bottom: 10px; padding: 15px 20px 15px 10px;
  color: ${props => props.theme.color.black.regular};
  font-weight: 600;
  text-decoration: none; text-align: left;
  transition: box-shadow 0.2s ease;
  white-space: nowrap;

  svg {
    margin: 0 15px 0 0;
    width: 20px;
  }

  svg path {
    fill: #9d9d9d;
  }

  &:hover {
    background-color: ${props => props.theme.color.link.hover};
  }

  &.current {
    ${props => props.theme.shadow.box};
    border-left: 5px solid ${props => props.theme.color.primary.regular};
    border-radius: 6px;
    font-weight: bold;
    color: white;

    svg path {
      fill: #868686;
    }
  }
`;

const UserContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px 2px;
  border-radius: 2.5px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.color.link.hover};
  }
`;

const StyledButton = styled(Button)`
  margin-bottom: 10px;

  &:hover {
    border: 3px solid ${props => props.theme.color.primary.regular};
  }
`;
