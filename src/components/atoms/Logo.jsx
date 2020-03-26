import React from "react";
import styled from "styled-components";
import image from "../../assets/images/icon_hacker.png";

const Logo = ({ size }) => {
  return (
    <LogoContainer size={size}>
      <img src={image} alt="Hackton - Organise hackathons" />
      <span>HackHunt</span>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  ${({ theme }) => theme.flex.center};
  color: rgb(0, 255, 70);

  & > img {
    width: ${({ size }) => (size ? "100px" : "43px")};
    object-fit: cover;
    background-color: rgb(0, 255, 70);
    filter: drop-shadow(0.15px 0.15px 1px rgb(0, 0, 0));
  }

  & > span {
    margin-left: 5px;
    font-size: ${({ size }) => (size ? "90px" : "30px")};
    text-shadow: 1px 1px 1px rgb(0, 0, 0);
  }
`;
