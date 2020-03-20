import React from "react";
import { SocialMediaContainer } from "../../assets/styles/atoms/SocialIconContainerStyling";
import MediaIcons from "./MediaIcons";
import { StrikedSpan } from "../../assets/styles/atoms/SpanStyling";

const SocialMedia = () => (
  <SocialMediaContainer>
    <StrikedSpanN >OR LOGIN WITH</StrikedSpanN>
    <MediaIcons />
  </SocialMediaContainer>
);

export default SocialMedia;
