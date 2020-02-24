import React from "react";
import MediaIcons from "./MediaIcons";
import { StrikedSpan } from "../atoms/Span";
import styled from 'styled-components';

const SocialMedia = () => (
  <SocialMediaContainer>
    <StrikedSpan>OR LOGIN WITH</StrikedSpan>
    <MediaIcons />
  </SocialMediaContainer>
);

export default SocialMedia;

const SocialMediaContainer = styled.div`

`;