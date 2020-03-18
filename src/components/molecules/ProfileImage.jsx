import React from 'react';
import { StyledImageN } from '../../assets/styles/atoms/StyledImage';

const ProfileImage = ({ name, image }) => (
  <StyledImageN>
    <div>
      <img src={image} alt="" />
    </div>
    <p>{name}</p>
  </StyledImageN>
);

export default ProfileImage;