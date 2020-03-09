import React from 'react';

import FooterContainer from '../../assets/styles/atoms/FooterContainerStyling';
import Group from '../atoms/Group';
import { FooterNavAnchor } from '../../assets/styles/atoms/AnchorStyling';
import { Paragraph } from '../../assets/styles/atoms/ParagraphStyling';

import linkedin from '../../assets/images/Icon-linkedin.png';
import twitter from '../../assets/images/Icon-twitter.png';
import facebook from '../../assets/images/Icon-facebook.png';
import SocialIcon from "../atoms/SocialIcon"

const Footer = () => (
  <FooterContainer>
    <Paragraph left>
      International Crafters © 2020
    </Paragraph>

    {/* <Group>
      <SocialIcon src={linkedin} alt="LinkedIn" />
      <SocialIcon src={twitter} alt="Twitter" />
      <SocialIcon src={facebook} alt="Facebook" />
    </Group> */}

    <Group>
      <FooterNavAnchor href="#">Privacy</FooterNavAnchor>
      <FooterNavAnchor href="#">Contacts</FooterNavAnchor>
    </Group>
  </FooterContainer>
);

export default Footer;
