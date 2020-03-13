import BodyContainer from "../atoms/BodyContainer";
import styled from "styled-components";
import { BoldSpan } from "../atoms/Span";
import { LetterIcon } from "../../../components/atoms/Icon";

export const TeamsCont = styled(BodyContainer)`
  background-color: white;
  width: 50%;
  height: 40%;
  overflow-y: auto;
  border: 1px solid lightgray;
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
`;

export const StyledLetterIcon = styled(LetterIcon)`
  margin: 0 20px 0 0 !important;
`;

export const NormalSpan = styled(BoldSpan)`
  font-weight: normal;
  padding: 5px;
`;

export const TeamMateDiv = styled.div`
    border-bottom: 1px solid lightgray;
    width: 100%;
    padding-bottom: 10px;
`;

export const Img = styled.img`
    width: 7%;
    height: 7%;
    margin-left: 1%;
    object-fit: cover;
`;

export const ImgWithBorder = styled.img`
    width: 7%;
    height: 7%;
    margin-left: 1%;
    object-fit: cover;
    border-radius: 5px;
`;