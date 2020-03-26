import React, { useState } from "react";
import { useSelector } from "react-redux";
// // import uuid from 'uuid';

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
} from "../../assets/styles/organisms/NavStyling";
import ProfileImg from "../atoms/ProfileImg";
import Icon from "../atoms/Icon";

const items = [
  {
    title: "Home",
    url: "/home",
    icon: "home"
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "th-large"
  },
  {
    title: "About",
    url: "/",
    icon: "info-circle"
  },
  {
    title: "Results",
    url: "/results",
    icon: "trophy"
  }
];

const Nav = ({
  setIsProfileOpen,
  isProfileOpen,
  isSideBarOpen,
  setIsSideBarOpen
}) => {
  const [ isEditProfileHovered, setIsEditProfileHovered ] = useState(false);
  const { token, email, fullname, image_url, username } = useSelector(
    state => state.currentUser
  );

  return (
    <StyledNav active={isSideBarOpen}>
      { token ? (
        <UserContainer onClick={() => setIsProfileOpen(!isProfileOpen)}>
          {isEditProfileHovered && <StyledEditIcon icon="user-edit" />}
          <StyledProfileImage
            active={isEditProfileHovered}
            onMouseEnter={() => setIsEditProfileHovered(true)}
            onMouseLeave={() => setIsEditProfileHovered(false)}
          >
            { image_url !== null ? (
              <>
                <ProfileImg
                  image={image_url}
                  alt={username}
                  {...{ isSideBarOpen }}
                />
              </>
            ) : (
              <ProfileImg alt="defaultImg" {...{ isSideBarOpen }} />
            )}
            { !isSideBarOpen && (
              <UserInfoContent>
                <p>{fullname}</p>
                <p>{email}</p>
              </UserInfoContent>
            )}
          </StyledProfileImage>
        </UserContainer>
      ) : <div style={{height: "75px"}} />}
      { token ? (
        <StyledButton
          active={isSideBarOpen.toString()}
          exact="true"
          link
          to="/event/new"
          color="primary"
          size="wide"
        >
          Create{isSideBarOpen && <br />} Event
        </StyledButton>
      ) : (
        <StyledButton
          active={isSideBarOpen.toString()}
          exact="true"
          link
          to="/dashboard"
          color="primary"
          size="wide"
        >
          Create{isSideBarOpen && <br />} Event
        </StyledButton>
      )}
      {items.map(({ title, url, icon }, idx) => {
        return (
          <div key={idx} style={{ width: "100%", position: "relative" }}>
            <StyledNavLink
              active={isSideBarOpen.toString()}
              exact
              to={url}
              key={title}
              activeClassName="current"
            >
              <Icon {...{ icon }} />
              {!isSideBarOpen && <span>{title}</span>}
            </StyledNavLink>
            {isSideBarOpen && <LinkDetails>{title}</LinkDetails>}
          </div>
        );
      })}
      <StyledExpandIcon
        icon="angle-double-down"
        active={isSideBarOpen.toString()}
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      />
    </StyledNav>
  );
};

export default Nav;
