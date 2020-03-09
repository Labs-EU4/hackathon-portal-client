import React from "react";
import { Link } from "react-router-dom";

import WideHeader from "../../assets/styles/atoms/WideHeaderStyling";
import HeaderContainer from "../../assets/styles/atoms/HeaderContainerStyling";
import Logo from "../atoms/Logo";
import PublicNav from "../molecules/PublicNav";

const Header = () => (
  <WideHeader>
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <PublicNav />
    </HeaderContainer>
  </WideHeader>
);

export default Header;