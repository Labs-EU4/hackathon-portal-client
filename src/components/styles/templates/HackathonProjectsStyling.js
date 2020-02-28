import styled from "styled-components";
import { media } from "../../index";
import BodyContainer from "../../atoms/BodyContainer";
import { CardWide } from "../../atoms/Card";
import { Paragraph } from "../../atoms/Paragraph";
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