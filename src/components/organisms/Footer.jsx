import React from "react";

import { FooterContainer } from "../../assets/styles/atoms/FooterContainerStyling";
import Group from "../atoms/Group";
import { FooterNavAnchor } from "../../assets/styles/atoms/AnchorStyling";
import { Paragraph } from "../../assets/styles/atoms/ParagraphStyling";

const Footer = () => (
  <FooterContainer>
    <Paragraph left>International Crafters © 2020</Paragraph>

    <Group>
      <FooterNavAnchor to={"#"}>Privacy</FooterNavAnchor>
      <FooterNavAnchor to={"#"}>Contacts</FooterNavAnchor>
      <FooterNavAnchor to={"/about"}>About</FooterNavAnchor>
    </Group>
  </FooterContainer>
);

export default Footer;
