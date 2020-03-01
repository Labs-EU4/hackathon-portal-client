import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import WideHeader from "../atoms/WideHeader";
import HeaderContainer from "../atoms/HeaderContainer";
import Logo from "../atoms/Logo";

import PublicNav from "../molecules/PublicNav";


const UserHeader = () => {
  return (
    <WideHeader>
      <HeaderContainer>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation>
          <PublicNav />
        </Navigation>
      </HeaderContainer>
    </WideHeader>
  );
};

export default UserHeader;

const Navigation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;