import React from "react";
import { NavLink } from "react-router-dom";
import { Header, Footer } from "../organisms/index";
import { H3 } from "../atoms/Heading";
import notFound_icon from "../../assets/notFound_icon.svg";
import { BodyColumn, BodyRow, Header2 } from "../styles/views/PageNotFoundStyling";

const PageNotFound = () => {

  return (
    <div>
      <Header />
      <BodyRow>
        <BodyColumn>
          <Header2>Ooops!</Header2>
          <H3>We can't seem to find the page  you are looking for</H3>
          <h3>Error code: 404</h3>
          <NavLink to="/dashboard" style={{ textDecoration: "none", color: "lightcoral", paddingTop: "10px" }}>Home</NavLink>
        </BodyColumn>
        <BodyColumn>
          <img src={notFound_icon} alt="404 icon" />
        </BodyColumn>
      </BodyRow>
      <Footer />
    </div>
  );
};

export default PageNotFound;
