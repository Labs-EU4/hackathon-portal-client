import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import WideHeader from "../../assets/styles/atoms/WideHeaderStyling";
import HeaderContainer from "../../assets/styles/atoms/HeaderContainerStyling";
import Logo from "../atoms/Logo";
import PublicNav from "../molecules/PublicNav";

const UserHeader = () => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Logo />
      </StyledLink>
      <Navigation>
        {/* //!! PLACE HERE THE SEARCH BAR AND OTHER COMPONENT RELATED TO THE NAVIGATION */}

        <PublicNav />
      </Navigation>
    </HeaderContainer>
  );
};

export default UserHeader;

const Navigation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
