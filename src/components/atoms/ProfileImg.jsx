import React from "react";
import styled from "styled-components";

import userImg from "../../assets/images/user_icon.svg";

const ProfileImg = ({ image, alt, isSideBarOpen }) => {
  let memberPicture = image ? JSON.parse(image) : null;

  return (
    <StyledImg
      active={isSideBarOpen}
      src={memberPicture ? memberPicture.avatar : userImg}
      alt={alt}
    />
  );
};

export default ProfileImg;

const StyledImg = styled.img`
  ${props => props.theme.shadow.card};
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  ${({ active }) => active && "margin-left: 4px;"};

  &:hover {
  }
`;
