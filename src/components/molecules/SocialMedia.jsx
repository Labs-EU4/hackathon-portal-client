import React from "react";
import { SocialMediaContainer } from "../../assets/styles/atoms/SocialIconContainer";
import MediaIcons from "./MediaIcons";
import { StrikedSpan } from "../atoms/Span";

const SocialMedia = () => (
  <SocialMediaContainer>
    <StrikedSpan>OR LOGIN WITH</StrikedSpan>
    <MediaIcons />
  </SocialMediaContainer>
);

export default SocialMedia;