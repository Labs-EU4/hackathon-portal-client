import React from "react";
import SocialIcon from "../atoms/SocialIcon";
import MediaIcons from "./MediaIcons";
import { StrikedSpan } from "../../assets/styles/atoms/Span";

const SocialMedia = () => (
  <SocialIcon>
    <StrikedSpan>OR LOGIN WITH</StrikedSpan>
    <MediaIcons />
  </SocialIcon>
);

export default SocialMedia;
