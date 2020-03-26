import React from "react";

import {
  BodyColumn,
  BodyRow,
  Header2,
  StyledNavLink
} from "../../assets/styles/views/PageNotFoundStyling";
import { H3 } from "../../assets/styles/atoms/HeadingStyling";
import notFound_icon from "../../assets/images/notFound_icon.svg";

const PageNotFound = () => {
  return (
    <BodyRow>
      <BodyColumn>
        <Header2>Ooops!</Header2>
        <H3>We can't seem to find the page you are looking for</H3>
        <h3>Error code: 404</h3>

        <StyledNavLink to="/dashboard">Home</StyledNavLink>
      </BodyColumn>
      <BodyColumn>
        <img src={notFound_icon} alt="404 icon" />
      </BodyColumn>
    </BodyRow>
  );
};

export default PageNotFound;
