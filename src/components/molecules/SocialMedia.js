import React from "react";
import SocialIcon from "../atoms/SocialIcon";
import MediaIcons from "./MediaIcons";
import { StrikedSpanN } from "../../assets/styles/atoms/Span";

const SocialMedia = () => (
  <SocialIcon>
    <StrikedSpanN >OR LOGIN WITH</StrikedSpanN>
    <MediaIcons />
  </SocialIcon>
);

export default SocialMedia;
