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
import { ProfileImg } from "../atoms/ProfileImg";
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
  const [isEditProfileHovered, setIsEditProfileHovered] = useState(false);
  const { token, email, fullname, image_url, username } = useSelector(
    state => state.currentUser
  );

  return (
    <StyledNavN active={isSideBarOpen}>
      <UserContainerN onClick={() => setIsProfileOpen(!isProfileOpen)}>
        <StyledProfileImageN
          active={isEditProfileHovered}
          onMouseEnter={() => setIsEditProfileHovered(true)}
          onMouseLeave={() => setIsEditProfileHovered(false)}
        >
          {image_url !== null && token ? (
            <>
              {isEditProfileHovered && <StyledEditIconN icon="user-edit" />}
              <ProfileImg
                image={image_url}
                alt={username}
                {...{ isSideBarOpen }}
              />
            </>
          ) : (
            <ProfileImg alt="defaultImg" {...{ isSideBarOpen }} />
          )}
          {!isSideBarOpen && (
            <UserInfoContentN>
              <p>{fullname}</p>
              <p>{email}</p>
            </UserInfoContentN>
          )}
        </StyledProfileImageN>
      </UserContainerN>
      <StyledButtonN
        active={isSideBarOpen}
        exact
        link
        to="/event/new"
        color="primary"
        size="wide"
        activeClassName="current"
      >
        Create{isSideBarOpen && <br />} Event
      </StyledButtonN>
      {items.map(({ title, url, icon }, idx) => {
        return (
          <div key={idx} style={{ width: "100%", position: "relative" }}>
            <StyledNavLinkN
              active={isSideBarOpen}
              exact
              to={url}
              key={title}
              activeClassName="current"
            >
              <Icon {...{ icon }} />
              {!isSideBarOpen && <span>{title}</span>}
            </StyledNavLinkN>
            {isSideBarOpen && <LinkDetailsN>{title}</LinkDetailsN>}
          </div>
        );
      })}
      <StyledExpandIconN
        icon="angle-double-down"
        active={isSideBarOpen}
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      />
    </StyledNavN>
  );
};
export default Nav;
