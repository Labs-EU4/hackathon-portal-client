import styled from "styled-components";
import { media } from "../variables/index";
import { BodyContainer } from "../atoms/BodyContainer";
import { CardWide, CardWideN } from "../atoms/Card";
import { Paragraph, ParagraphN } from "../atoms/Paragraph";
import { RowBodyN } from "../atoms/RowBody";
import React from "react";

export const BodyContainerColumn = styled(props => (
  <BodyContainer {...props} />
))`
  flex-direction: column;
  justify-content: start;
`;

export const Card = styled(CardWide)`
  width: 800px;
`;

export const Team = styled.div`
  display: block;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Strong = styled.strong`
  font-weight: bold;
`;

export const Description = styled(Paragraph)`
  display: block;
  max-width: 240px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${media.tablet} {
    max-width: 100%;
    margin: 0 0 20px 0;
    padding: 0 20px;
  }

  @media ${media.mobile} {
    padding: 0;
  }
`;

export const RatingGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${media.tablet} {
    margin: 0 0 20px 0;
  }
`;

export const JudgeCount = styled.span`
  font-size: 12px;
  margin: 5px 0 0 0;
`;

export const SubmissionEntry = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c8c8c8;
  padding: 20px 0;

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    border-bottom: 0;
  }

  @media ${media.tablet} {
    flex-direction: column;
  }
`;

// --------------------------------- NEW // --------------------------------- //



export const StyledWideBodyN = styled.div`
  position: absolute; top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, .4);
  z-index: 100;
`;

export const StyledCardWideN = styled(CardWideN)`
  ${props => props.theme.shadow.box};
  position: absolute; top: 50%; left: 50%;
  width: 70%; max-width: 800px;
  transform: translate(-50%, -50%);
  z-index: 200;
`;

export const StyledParagraphN = styled(ParagraphN)`
  margin: 20px auto;
  font-size: 2rem;
`;

export const StyledRowBodyN = styled(RowBodyN)`
  max-height: 550px;
  overflow-y: scroll;
`;

export const TeamN = styled.h3`
  border-bottom: 2px solid ${props => props.theme.color.grey.regular};
  margin: 0 auto; padding: 5px 10px;
  font-size: 1.8rem; font-weight: bold; 
  text-align: center;
`;

export const SubmissionEntryN = styled.div`
  ${props => props.theme.flex.column};
  ${props => props.theme.shadow.box};
  width: 100%;
  /* border-bottom: 1px solid #c8c8c8; */
  border: 1px solid ${props => props.theme.color.grey.regular};
  padding: 5px 0;
  margin-bottom: 5px;
`;

export const SubmissionContentN = styled.div`
  ${props => props.theme.flex.custom('center', 'center', 'column')};
  padding: 10px;
`;

export const StrongN = styled.strong`
  font-weight: bold;
`;

export const DescriptionN = styled(ParagraphN)`
  width: 100%;
  margin: none; padding-top: 10px;
  overflow: hidden;
  /* Ellipsis not working, fix this feature */
  text-align: center; text-overflow: ellipsis;
  @media ${media.tablet} {
    max-width: 100%;
    margin: 0 0 20px 0;
    padding: 0 20px;
  }
  @media ${media.mobile} {
    padding: 0;
  }
`;

export const RatingGroupN = styled.div`
  ${props => props.theme.flex.custom('center', 'center', 'column')};
  margin-bottom: 20px;
  /* @media ${media.tablet} {
    margin: 0 0 20px 0;
  } */
`;

export const JudgeCountN = styled.span`
  font-size: 12px;
  margin: 5px 0 0 0;
`;