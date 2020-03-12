import React from "react";
import { Link } from "react-router-dom";
import WideHeader from "../../assets/atoms/WideHeader";
import HeaderContainer from "../../assets/atoms/HeaderContainer";
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
