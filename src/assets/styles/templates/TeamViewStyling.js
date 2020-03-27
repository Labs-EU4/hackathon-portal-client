import styled from "styled-components";

import { BodyContainer } from "../atoms/BodyContainerStyling";
import { BoldSpan } from "../atoms/SpanStyling";
import { NavLink } from "react-router-dom";

export const TeamsContainer = styled(BodyContainer)`
  position: relative;
  background-color: black;
  width: 500px;
  height: 80%;
  overflow-y: auto;
  border: 1px solid rgb(0, 255, 70);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25%;
  border-radius: 6px;
  padding: 20px;

  p {
    margin: 0;
    padding: 3px;
  }

  button {
    margin: 20px;
  }
`;

export const FancyBoldSpan = styled(BoldSpan)`
  border-bottom: 1px solid lightgray;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  font-size: 14px;
  color: white;
  font-weight: normal;
`;

export const FancierBoldSpan = styled(BoldSpan)`
  border-bottom: 1px solid lightgray;
  padding-top: 5px;
  padding-bottom: 20px;
  width: 100%;
  text-align: center;
  color: rgb(0, 255, 70);
`;

export const StyledLetterIcon = styled.div`
  border: none;
  border-radius: 50%;
  color: rgb(0, 255, 70);
`;

export const NormalSpan = styled(BoldSpan)`
  font-weight: bold;
  padding: 5px;
  color: rgb(0, 255, 70);
`;

export const DivWrapper = styled.div`
  border-bottom: 1px solid lightgray;
  width: 100%;
  padding-bottom: 10px;
`;

export const ImgTeammates = styled.img`
  width: 40px; height: 40px;
  margin-left: 1%;
  object-fit: cover;
`;

export const TeamMemberImg = styled(ImgTeammates)`
  border-radius: 5px;
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

export const BtnContainer = styled.div`
  position: absolute; bottom: 0; left: 0;
  display: flex;
  width: 100%;
`;
