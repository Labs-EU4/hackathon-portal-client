import styled from "styled-components";
<<<<<<< HEAD
import { media } from "../variables/index";
import { CardWideN } from "../atoms/Card";
import { ParagraphN } from "../atoms/Paragraph";
import { RowBodyN } from "../atoms/RowBody";
=======

import { media } from "../variables/media";
import { RowBody } from "../atoms/RowBodyStyling";
import { CardWide } from "../atoms/CardStyling";
import { Paragraph } from "../atoms/ParagraphStyling";
>>>>>>> 07ca61b053dab9dca018c7f141ea9f8f3b48a845

export const StyledWideBody = styled.div`
  position: absolute; top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, .4);
  z-index: 100;
`;

export const StyledCardWide = styled(CardWide)`
  ${props => props.theme.shadow.box};
  position: absolute; top: 50%; left: 50%;
  width: 70%; max-width: 800px;
  transform: translate(-50%, -50%);
  z-index: 200;
`;

export const StyledParagraph = styled(Paragraph)`
  margin: 20px auto;
  font-size: 2rem;
`;

export const StyledRowBody = styled(RowBody)`
  max-height: 550px;
  overflow-y: scroll;
`;

export const Team = styled.h3`
  border-bottom: 2px solid ${props => props.theme.color.grey.regular};
  margin: 0 auto; padding: 5px 10px;
  font-size: 1.8rem; font-weight: bold; 
  text-align: center;
`;

export const SubmissionEntry = styled.div`
  ${props => props.theme.flex.column};
  ${props => props.theme.shadow.box};
  width: 100%;
  /* border-bottom: 1px solid #c8c8c8; */
  border: 1px solid ${props => props.theme.color.grey.regular};
  padding: 5px 0;
  margin-bottom: 5px;
`;

export const SubmissionContent = styled.div`
  ${props => props.theme.flex.custom('center', 'center', 'column')};
  padding: 10px;
`;

export const Strong = styled.strong`
  font-weight: bold;
`;

export const Description = styled(Paragraph)`
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

export const RatingGroup = styled.div`
  ${props => props.theme.flex.custom('center', 'center', 'column')};
  margin-bottom: 20px;

  /* @media ${media.tablet} {
    margin: 0 0 20px 0;
  } */
`;

export const JudgeCount = styled.span`
  font-size: 12px;
  margin: 5px 0 0 0;
`;