import React from 'react';

import WideFooter from '../../assets/styles/atoms/WideFooter';
import FooterContainer from '../../assets/styles/atoms/FooterContainer';
import Group from '../../components/atoms/Group';
import SocialIcon from '../../components/atoms/SocialIcon';
import { FooterNavAnchor } from '../../assets/styles/atoms/Anchor';
import { PlainParagraph } from '../../assets/styles/atoms/Paragraph';

import linkedin from '../../assets/images/Icon-linkedin.png';
import twitter from '../../assets/images/Icon-twitter.png';
import facebook from '../../assets/images/Icon-facebook.png';

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
