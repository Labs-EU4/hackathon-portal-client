import React from 'react';
import styled from 'styled-components';

import FooterContainer from '../../components/atoms/FooterContainer';
import Group from '../../components/atoms/Group';
// import SocialIcon from '../../components/atoms/SocialIcon';
// import SocialIcon from '../../components/atoms/Icon';
// import Icon from '../atoms/Icon';
import { FooterNavAnchor } from '../../components/atoms/Anchor';
import { Paragraph } from '../../components/atoms/Paragraph';

// import linkedin from '../../assets/Icon-linkedin.png';
// import twitter from '../../assets/Icon-twitter.png';
// import facebook from '../../assets/Icon-facebook.png';

const Footer = () => (
  <FooterContainer>
    {/* <Group>
      <Icon icon="linkedin" />
      <Icon icon="twitter-square" />
      <Icon icon="facebook-square" />
    </Group> */}
    <Paragraph left>
      International Crafters © 2020
    </Paragraph>

    <Group>
      {/* <FooterNavAnchor href="https://hackton.co/#team">Team</FooterNavAnchor> */}
      <FooterNavAnchor href="#">Privacy</FooterNavAnchor>
      <FooterNavAnchor href="#">Contacts</FooterNavAnchor>
    </Group>

  </FooterContainer>
);

export default Footer;

// const StyledGroup = styled(Group)`
//   ${({ left }) => left && `margin-right: auto`};
// `;
