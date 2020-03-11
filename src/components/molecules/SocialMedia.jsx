import React from "react";

import { SocialMediaContainer } from "../../assets/styles/atoms/SocialIconContainerStyling";
import { StrikedSpan } from "../../assets/styles/atoms/SpanStyling";
import MediaIcons from "./MediaIcons";

const SocialMedia = () => (
  <SocialMediaContainer>
    <StrikedSpan>OR LOGIN WITH</StrikedSpan>
    <MediaIcons />
  </SocialMediaContainer>
);

export default SocialMedia;