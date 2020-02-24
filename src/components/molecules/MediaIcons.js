import React from "react";
import styled from 'styled-components';

import Icon from "../atoms/Icon";

const baseUrl = process.env.REACT_APP_API_URL;
const MediaIcons = () => {
  return (
    <SocialContainer>
      <a rel="me" href={`${baseUrl}/api/auth/github`} title="github">
        {/* <Icon icon="github" /> */}
      </a>
      <a rel="me" href={`${baseUrl}/api/auth/google`} title="google">
        {/* <Icon icon="google" /> */}
      </a>
    </SocialContainer>
  );
};

const SocialContainer = styled.div`

`;

export default MediaIcons;
