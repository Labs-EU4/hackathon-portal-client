import React from 'react';

import WideFooter from '../atoms/WideFooter';
import FooterContainer from '../atoms/FooterContainer';
import Group from '../atoms/Group';
import SocialIcon from '../atoms/SocialIcon';
import { FooterNavAnchor } from '../atoms/Anchor';
import { PlainParagraph } from '../atoms/Paragraph';

import linkedin from '../../assets/Icon-linkedin.png';
import twitter from '../../assets/Icon-twitter.png';
import facebook from '../../assets/Icon-facebook.png';

const Footer = () => (
  <WideFooter>
    <FooterContainer>
      <Group>
        <SocialIcon src={linkedin} alt="LinkedIn" />
        <SocialIcon src={twitter} alt="Twitter" />
        <SocialIcon src={facebook} alt="Facebook" />
      </Group>

      <Group>
        <FooterNavAnchor href="https://hackton.co/#team">Team</FooterNavAnchor>
        <FooterNavAnchor href="#">Privacy</FooterNavAnchor>
        <FooterNavAnchor href="#">Contacts</FooterNavAnchor>
      </Group>

      <Group>
        <PlainParagraph>
          International Crafters © 2020
        </PlainParagraph>
      </Group>
    </FooterContainer>
  </WideFooter>
);

export default Footer;
