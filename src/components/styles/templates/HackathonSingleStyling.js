import styled from "styled-components";
import { CardWide } from "../../atoms/Card";
import { LetterIcon } from "../../atoms/Icon";
import BodyContainer from "../../atoms/BodyContainer";
import { BoldSpan } from "../../atoms/Span";
import { Paragraph } from "../../atoms/Paragraph";
import { media } from "../../index";
import Button from "../../atoms/Button";

import React from "react";

export const BodyContainerColumn = styled(props => (
  <BodyContainer {...props} />
))`
  flex-direction: column;
  justify-content: start;
`;

export const NormalSpan = styled(BoldSpan)`
    font-weight: normal;
    text-transform: capitalize;
  `;

export const Image = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 30px;
  `;

export const PTags = styled(Paragraph)`
    display: inline-block;
    text-align: center;
    border: 1px solid #e9b75f;
    border-radius: 6px;
    color: #212121;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    margin: 5px 5px 5px 0;
    padding: 7px 8px;
  `;

export const PHosted = styled(Paragraph)`
    font-size: 14px;
    color: darkgray;
    margin: 3px 0 20px 0;
  `;


export const PBold = styled(Paragraph)`
    font-weight: bold;
`;

export const EventCardWide = styled(CardWide)`
    max-width: 60%;
    min-width: 55%;
  
    @media ${media.tablet} {
      max-width: 100%;
    }
  `;

export const TagsCardWide = styled(CardWide)`
    max-width: 35%;
    height: 100%;
    justify-content: flex-start;
  
    @media ${media.tablet} {
      max-width: 100%;
    }
  
    div {
      display: flex;
      flex-direction: column;
    }
  
    .tags-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1px solid lightgray;
    }
  
    .status {
      padding: 30px 0;
      margin: 0 0 30px 0;
      display: flex;
      flex-direction: column;
      padding: 10px;
      border-bottom: 1px solid lightgray;
    }
  `;

export const TitleContainer = styled.div`
    margin: 0 0 20px 0;
    display: flex;
    align-items: baseline;
  `;

export const StyledLetterIcon = styled(LetterIcon)`
    margin: 0 20px 0 0 !important;
  `;

export const Details = styled.div`
    display: flex;
  
    & div {
      margin: 0 20px 0 0;
    }
  
    @media ${media.mobile} {
      flex-direction: column;
    }
  `;

export const ButtonsDashGroup = styled.div`
    a,
    button {
      display: block;
      margin: 0 0 10px 0;
    }
  `;

export const Separator = styled.hr`
    border-top: 0;
    border-bottom: 1px solid #c3cfd9;
    margin: 0 0 20px 0;
  `;

export const TagsGroup = styled.div`
    margin: 0 0 20px 0;
  `;

export const ImgPlaceHolder = styled.img`
    width: "7%";
    height: "7%";
    margin-left: "1%";
    object-fit: "cover";
    display: "inline-block";
  `;

export const AvatarImg = styled.img`
    width: "7%";
    height: "7%";
    margin-left: "1%";
    object-fit: "cover";
    border-radius: "5px";
  `;

export const RegButton = styled(Button)`
    border: 2px solid lightgray;
    color: lightgray
`;