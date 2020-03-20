import React from "react";

import { FooterContainer } from "../../assets/styles/atoms/FooterContainerStyling";
import Group from "../atoms/Group";
import { FooterNavAnchor } from "../../assets/styles/atoms/AnchorStyling";
import { Paragraph } from "../../assets/styles/atoms/ParagraphStyling";

const Footer = () => (
  <FooterContainer>
    <Paragraph left>International Crafters © 2020</Paragraph>

    <Group>
      <FooterNavAnchor href="#">Privacy</FooterNavAnchor>
      <FooterNavAnchor href="#">Contacts</FooterNavAnchor>
    </Group>
  </FooterContainer>
);

export default Footer;
