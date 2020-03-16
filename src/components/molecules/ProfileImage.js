import React from 'react';
import { StyledImage } from '../../assets/styles/atoms/StyledImage';

const ProfileImage = ({ name, image }) => (
  <StyledImage>
    <div>
      <img src={image} alt="" />
    </div>
    <p>{name}</p>
  </StyledImage>
);

export default ProfileImage;