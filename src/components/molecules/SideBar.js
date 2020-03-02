import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import * as solid from "../../assets/styles/variables/colors";
import { media } from "../../assets/styles/variables/media";
import Button from '../atoms/Button';
import ProfileImg from "../atoms/ProfileImg";
import Icon from '../atoms/Icon';

const items = [
  {
    title: "Home",
    url: "/",
    icon: "home"
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "th-large"
  },
  {
    title: "About",
    url: "/about",
    icon: "info-circle"
  }
];

const SideBar = ({ type, setIsProfileOpen, isProfileOpen, isSideBarOpen, setIsSideBarOpen }) => {
  const [ isEditProfileHovered, setIsEditProfileHovered ] = useState(false);
  // const [ isSideBarClosed, setIsSideBarClosed ] = useState(false);
  const { token, email, fullname, image_url, username } = useSelector(state => state.currentUser);

  return (
    <StyledNav active={isSideBarOpen}>
      <UserContainer 
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      >
        <StyledProfileImage 
          active={isEditProfileHovered}
          onMouseEnter={() => setIsEditProfileHovered(true)}
          onMouseLeave={() => setIsEditProfileHovered(false)}
        >
            {
              image_url !== null && token ? (
                <>
                  {
                    isEditProfileHovered && <StyledEditIcon icon="user-edit" />
                  }
                  <ProfileImg image={image_url} alt={username} />
                </>
              ) : (
                <ProfileImg alt="defaultImg" />
              )
            }
            <UserInfoContent>
              <p>{fullname}</p>
              <p>{email}</p>
            </UserInfoContent>
          {/* {
            user && <Dropdown className="row2tab" />
          }   */}
        </StyledProfileImage>
      </UserContainer>
      <StyledButton
        exact 
        link
        to="/dashboard/new" 
        color="primary"
        size="wide"
        activeClassName="current"
      >Create Event</StyledButton>
      {items.map(({ title, url, icon }) => {
        return (
          <div style={{ width: '100%', position: 'relative'}}>
            <StyledNavLink active={isSideBarOpen} exact to={url} key={title} activeClassName="current">
              <Icon {...{icon}} />
              {!isSideBarOpen && <span>{title}</span>}
            </StyledNavLink>
            {
              isSideBarOpen && <LinkDetails>{title}</LinkDetails>
            }
          </div>
        );
      })}
      <StyledExpandIcon 
        icon="angle-double-down" 
        active={isSideBarOpen}
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      />
    </StyledNav>
  );
};

export default SideBar;


const StyledEditIcon = styled(Icon)`
  position: absolute; top: 50%; left: 50%;
  font-size: 2.5rem;
  color: ${props => props.theme.color.primary.regular};
  z-index: 500;
  transform: translate(-40%, -50%);
`;

const StyledExpandIcon = styled(Icon)`
  position: absolute; bottom: 70px; left: 50%;
  font-size: 3rem;
  transform: ${({ active }) => active ? 'translateX(-50%) rotate(90deg);' : 'translateX(-50%) rotate(-90deg);'};
  cursor: pointer;

  &:hover {
    transform: ${({ active }) => active 
      ? 'translateX(-50%) rotate(90deg) scale(1.1);' 
      : 'translateX(-50%) rotate(-90deg) scale(1.1);'};
    color: ${props => props.theme.color.white.regular};
  }
`;

const UserInfoContent = styled.div`
  margin-left: 5px;

  p {
    &:last-child {
      ${props => props.theme.fontSize.small};
      color: ${props => props.theme.color.grey.regular};
    }
  }
`;

const StyledNav = styled.div`
  ${props => props.theme.flex.custom('start', 'center', 'column')};
  position: relative;
  width: ${({ active }) => active ? '60px' : '250px'}; 
  max-width: 300px;
  padding: ${({ active }) => active ? '90px 0' : '90px 20px 30px'};

  @media ${media.tablet} {
    width: 50px;
  }

  &:first-child {
    margin-top: 10px;
  }
`;

const StyledProfileImage = styled.div`
  ${props => props.theme.shadow.box};
  position: relative;
  display: flex; align-items: center;
  width: 50px; height: 50px;
  background-color: transparent;
  border-radius: 50%;
  
  &:hover img {
    opacity: .4;
  }
`;

const StyledNavLink = styled(NavLink)`
  ${props => props.theme.flex.custom('flex-start', 'flex-end')};
  width: 100%;
  margin-bottom: 10px; padding: 12px 0 8px 5px;
  color: ${props => props.theme.color.black.regular};
  font-weight: 600;
  text-decoration: none; text-align: left;
  transition: box-shadow 0.2s ease;
  white-space: nowrap;

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

    ${({ active }) => active 
      ? `border-right: 5px solid ${solid.blue}; border-radius: 0px;` 
      : `border-left: 5px solid ${solid.blue}; border-radius: 6px;`
    }

    svg {
      margin: 0 5px;
    }

    svg path {
      fill: ${props => props.theme.color.white.regular};
    }
  } 
`;

const LinkDetails = styled.div`
  ${props => props.theme.flex.center};
  ${props => props.theme.shadow.box};
  position: absolute; top: 50%;
  height: 45px;
  background-color: #3BCEF2;
  border: 2px solid ${props => props.theme.color.primary.regular}; border-right: none;
  border-top-left-radius: 3px; border-bottom-left-radius: 3px;
  padding: 0 20px;
  transform: translate(-100%, -60%);
  visibility: hidden;
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
