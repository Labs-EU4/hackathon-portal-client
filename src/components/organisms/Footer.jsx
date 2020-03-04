import React from 'react';

import FooterContainer from '../../assets/styles/atoms/FooterContainer';
import Group from '../atoms/Group';
import { FooterNavAnchor } from '../../assets/styles/atoms/Anchor';
import { Paragraph } from '../../assets/styles/atoms/Paragraph';

const Footer = () => (
  <FooterContainer>
    <Paragraph left>
      International Crafters © 2020
    </Paragraph>

    <Group>
      <FooterNavAnchor href="#">Privacy</FooterNavAnchor>
      <FooterNavAnchor href="#">Contacts</FooterNavAnchor>
    </Group>

  </FooterContainer>
);

export default Footer;


// import linkedin from '../../assets/Icon-linkedin.png';
// import twitter from '../../assets/Icon-twitter.png';
// import facebook from '../../assets/Icon-facebook.png';
{/* <Group>
  <SocialIcon src={linkedin} alt="LinkedIn" />
  <SocialIcon src={twitter} alt="Twitter" />
  <SocialIcon src={facebook} alt="Facebook" />
</Group> */}