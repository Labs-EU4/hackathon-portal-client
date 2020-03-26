import React from "react";
import styled from "styled-components";
// import { media } from "../../assets/styles/variables/media";

import userImg from "../../assets/images/user_icon.svg";
import Icon from '../atoms/Icon';

const ProfileImg = ({ image, alt, isSideBarOpen }) => {
  let memberPicture = image ? JSON.parse(image) : null;

  return (
    <>
      {
        memberPicture ? (
          <StyledImg
            active={isSideBarOpen}
            src={memberPicture.avatar}
            alt={alt}
          />
        ) : (
          <StyledIcon
            icon="user-circle"
          />
        )
      }
    </>
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

const StyledIcon = styled(Icon)`
  font-size: 35px;
  color: rgb(0, 255, 70);
`;

//   @media ${media.tablet} {
//     width: 35px;
//     height: 35px;
//   }

//   @media ${media.mobile} {
//     width: 30px;
//     height: 30px;
//   }
