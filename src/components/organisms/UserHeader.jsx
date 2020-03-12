import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import WideHeader from "../../assets/styles/atoms/WideHeaderStyling";
import HeaderContainer from "../../assets/styles/atoms/HeaderContainerStyling";
import Logo from "../atoms/Logo";
import PublicNav from "../molecules/PublicNav";

const UserHeader = () => {
  const { email: user } = useSelector(state => state.currentUser);

  const initial = user[0].toUpperCase();

  const Navigation = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <WideHeader>
      <HeaderContainer>
        <Link to="/dashboard">
          <Logo />
        </Link>
        <Navigation>
          <Nav type="mobile" />
          <ProfileImg>
            {initial}
            <Dropdown className="row2tab" />
          </ProfileImg>
        </Navigation>
      </HeaderContainer>
    </WideHeader>
  );
};

export default UserHeader;
