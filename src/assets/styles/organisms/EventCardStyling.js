import styled from "styled-components";

import { IconLetter } from "../atoms/IconLetterStyling";
import { Paragraph } from "../atoms/ParagraphStyling";
import Icon from "../../../components/atoms/Icon";

export const StyledEventCard = styled.div`
  text-decoration: none;
  &:hover > div {
    ${props => props.theme.shadow.box};
    transform: translateY(5px);
    transition: box-shadow 0.2s ease, transform 0.4s ease;
  }
`;

export const EventImage = styled.figure`
  width: 100%;
  height: 170px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const OrgImg = styled.img`
  position: absolute;
  top: 130px;
  left: 10px;
  width: 30px;
  height: 30px;
  border: 1px solid ${props => props.theme.color.primary.regular};
  border-radius: 50%;
  object-fit: cover;
`;

export const StyledIconLetter = styled(IconLetter)`
  ${props => props.theme.flex.center};
  position: absolute;
  top: 130px;
  left: 10px;
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.color.black.regular};
  border: 1px solid ${props => props.theme.color.primary.regular};
  border-radius: 50%;
  object-fit: cover;
  color: ${props => props.theme.color.primary.regular};
`;

export const EventCardContent = styled.div`
  width: 100%;
  height: 220px;
  padding: 10px;
  overflow: hidden;
`;

export const EventCTA = styled.div`
  ${props => props.theme.flex.custom("space-between", "center")};
  position: absolute;
  top: calc(100% - 50px);
  left: 0;
  width: 100%;
  padding: 0 10px 5px;
`;

export const DateParagraph = styled(Paragraph)`
  margin-bottom: 0;
  color: ${props => props.theme.color.grey.regular};
  font-size: 14px;
`;

export const LocationParagraphN = styled(Paragraph)`
  margin: -5px 0 8px;
  color: ${props => props.theme.color.grey.light};
  font-size: 13px;
`;

export const CardCountDown = styled.div`
  position: absolute;
  top: 20px;
  left: 70%;
  background-color: ${props => props.theme.color.white.regular};
  border: 2px solid ${props => props.theme.color.black.regular};
  border-radius: 3px;
  padding: 5px 10px;
  font-size: 16px;
`;

export const StyledBookmarkIcon = styled(Icon)`
  position: absolute;
  top: -5px;
  left: 10px;
  font-size: 27px;
  color: ${props => props.theme.color.primary.regular};
  cursor: pointer;
`;

export const StyledStarIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 11px;
  font-size: 16px;
  color: ${props => props.theme.color.white.regular};
  cursor: pointer;
`;
