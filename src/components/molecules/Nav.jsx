import React, { useState } from "react";
import { useSelector } from "react-redux";

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
} from '../../assets/styles/molecules/Nav';
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

const SideBar = ({ setIsProfileOpen, isProfileOpen, isSideBarOpen, setIsSideBarOpen }) => {
  const [ isEditProfileHovered, setIsEditProfileHovered ] = useState(false);
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
                <ProfileImg image={image_url} alt={username} {...{isSideBarOpen}}/>
              </>
            ) : (
              <ProfileImg alt="defaultImg" {...{isSideBarOpen}} />
            )
          }
          {
            !isSideBarOpen && (
              <UserInfoContent>
                <p>{fullname}</p>
                <p>{email}</p>
              </UserInfoContent>
            )
          }
        </StyledProfileImage>
      </UserContainer>
      <StyledButton
        active={isSideBarOpen}
        exact 
        link
        to="/dashboard/new" 
        color="primary"
        size="wide"
        activeClassName="current"
      >Create{ isSideBarOpen && <br/>} Event</StyledButton>
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