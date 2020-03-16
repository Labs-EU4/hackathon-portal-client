import styled from "styled-components";
import { CardWide, CardWideN } from "../atoms/Card";
import { BodyContainer } from "../atoms/BodyContainer";
import { BoldSpan, BoldSpanN } from "../atoms/Span";
import { Paragraph, ParagraphN } from "../atoms/Paragraph";
import { media } from "../variables/index";
import Button from "../../../components/atoms/Button";

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
  min-width: 55%;
  overflow-wrap: break-word;
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
  color: lightgray;
`;


// --------------------------------- NEW // --------------------------------- //


export const SpanContentN = styled(BoldSpanN)`
  ${props => props.theme.fontSize.medium};
  font-weight: bold; 
  text-transform: capitalize;
`;

export const PTagsN = styled(ParagraphN)`
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

export const TitleContainerN = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export const ButtonsDashGroupN = styled.div`
  a,
  button {
    display: block;
    margin: 0 0 10px 0;
  }
`;

export const TagsGroupN = styled.div`
  margin-bottom: 20px;
`;

export const ModalBodyN = styled.div`
  ${props => props.theme.shadow.box};
  position: absolute; top: 0; left: 0;
  background-color: rgba(0, 0, 0, .4);
  width: 100%; height: 100%;
  padding-right: 10px;
  z-index: 100;
`;

export const StyledEventCardN = styled(CardWideN)`
  position: relative;
  min-width: 99%; height: 100%;
  background-color: ${props => props.active ? 'rgba(0, 0, 0, .8)' : props.theme.color.grey.bg};
  transform: ${props => props.active && 'translateY(80%)'};
  overflow-y: scroll;
  box-shadow: 3px 3px 10px ${props => props.theme.color.black.regular};
  transition: ${props => props.active && 'transform .5s ease'};
  &::-webkit-scrollbar {
    width: 0; height: 0;
  }
`;

export const EventCardLeftColumnN = styled.div`
  width: calc(100% - 300px);
  @media ${media.tablet} {
    width: 100%;
  }
`;

export const EventImageContainerN = styled.figure`
  width: 100%; height: 350px;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const EventImgN = styled.img`
  width: 100%; height: 100%;
`;

export const JudgesContainerN = styled.div`
  width: 100%;
  display: flex; flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const JudgeCardN = styled.div`
  display: flex;
  width: 33%; min-width: 250px; height: 80px;
  margin: 10px 0;
`;

export const JudgeImgN = styled.img`
  width: 80px;
  object-fit: cover;
  border-radius: 50%;
`;

export const JudgeInfoN = styled.div`
  ${props => props.theme.flex.column};
  padding: 10px;
`;

export const TagsCardWideN = styled(CardWideN)`
  ${props => props.theme.shadow.box};
  position: fixed; left: ${({ menuOpen }) => menuOpen
    ? 'calc(100% - 400px)' : 'calc(100% - 580px)'
  }; 
  top: 70px;
  display: ${({ active }) => active && 'none'};
  width: 300px; max-height: calc(100vh - 130px);
  padding: 8px 5px;
  overflow-y: scroll;
  @media ${media.tablet} {
    width: 100%;
  }
`;

export const TagCardN = styled.div`
  ${props => props.theme.flex.column};
  border: 2px solid ${props => props.theme.color.grey.light};
  margin-bottom: 10px;
  padding: 10px;
`;

export const UserContainerN = styled.div`
  ${props => props.theme.flex.columnCenter};
  padding-bottom: 0;
`;

export const ImageN = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 30px;
  margin: 10px 0 5px;
`;

export const PHostedN = styled(ParagraphN)`
  ${props => props.theme.fontSize.medium};
  margin-bottom: 0;
  font-weight: bold;
  color: ${props => props.theme.color.black.regular};
`;