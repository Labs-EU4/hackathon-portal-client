import React from "react";
import { SocialMediaContainer } from "../../assets/styles/atoms/SocialIconContainerStyling";
import MediaIcons from "./MediaIcons";
import { StrikedSpan } from "../../assets/styles/atoms/Span";

const SocialMedia = () => (
  <SocialMediaContainer>
    <StrikedSpan>OR LOGIN WITH</StrikedSpan>
    <MediaIcons />
  </SocialMediaContainer>
);

export default SocialMedia;
