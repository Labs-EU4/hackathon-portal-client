import React from 'react';
import styled from 'styled-components';

const SocialIcon = ({ src, alt }) => (
  <IMG src={src} alt={alt} />
);

export default SocialIcon;

const IMG = styled.img`
  margin-right: 15px;
`;
