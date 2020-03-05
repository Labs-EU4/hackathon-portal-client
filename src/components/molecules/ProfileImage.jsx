import React from 'react';
import styled from 'styled-components';

import StyledImage from '../../assets/styles/atoms/StyledImage';

const ProfileImage = ({ name, image }) => (
  <StyledAvatarImg>
    <div>
      <img src={image} alt="" />
    </div>
    <p>{name}</p>
  </StyledAvatarImg>
);

export default ProfileImage;

const StyledAvatarImg = styled(StyledImage)`
  width: 50px; height: 50px;
`;