import React from "react";

import { SocialMediaContainer } from "../../assets/styles/atoms/SocialIconContainer";
import { StrikedSpan } from "../../assets/styles/atoms/Span";
import MediaIcons from "./MediaIcons";

const SocialMedia = () => (
  <SocialMediaContainer>
    <StrikedSpan>OR LOGIN WITH</StrikedSpan>
    <MediaIcons />
  </SocialMediaContainer>
);

export default SocialMedia;