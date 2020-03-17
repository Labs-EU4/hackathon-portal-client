import React from "react";
import { Link } from "react-router-dom";

import WideHeader from "../../assets/styles/organisms/WideHeaderStyling";
import HeaderContainer from "../../assets/styles/organisms/HeaderContainerStyling";
import Logo from "../atoms/Logo";
import PublicNav from "./PublicNav";

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