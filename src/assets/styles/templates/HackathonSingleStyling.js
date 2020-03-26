import styled from "styled-components";

import { media } from "../variables/media";
import { BoldSpan } from "../atoms/SpanStyling";
import { CardWide } from "../atoms/CardStyling";
import { Paragraph } from "../atoms/ParagraphStyling";

export const SpanContent = styled(BoldSpan)`
  font-weight: bold; font-size: 16px; 
  color: ${props => props.theme.color.primary.regular};
  text-transform: capitalize;
`;

export const PTags = styled(Paragraph)`
  display: inline-block;
  text-align: center;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  margin: 5px 5px 5px 0;
  padding: 7px 8px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export const ButtonsDashGroup = styled.div`
  a,
  button {
    display: block;
    margin: 0 0 10px 0;
  }
`;

export const TagsGroup = styled.div`
  margin-bottom: 20px;
`;

export const ModalBody = styled.div`
  ${props => props.theme.shadow.box};
  position: absolute; top: 0; left: 0;
  background-color: rgba(0, 0, 0, .4);
  width: 100%; height: 100%;
  padding-right: 10px;
  z-index: 100;
`;

export const StyledEventCard = styled(CardWide)`
  position: relative;
  min-width: 99%; height: 100%;
  background-color: #1b1e26;
  transform: ${props => props.active && 'translateY(80%)'};
  overflow-y: scroll;
  box-shadow: 3px 3px 10px ${props => props.theme.color.black.regular};
  transition: ${props => props.active && 'transform .5s ease'};

  &::-webkit-scrollbar {
    width: 0; height: 0;
  }
`;

export const EventCardLeftColumn = styled.div`
  width: calc(100% - 300px);

  @media ${media.tablet} {
    width: 100%;
  }
`;

export const EventImageContainer = styled.figure`
  width: 100%; height: 350px;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const EventImg = styled.img`
  width: 100%; height: 100%;
`;

export const JudgesContainer = styled.div`
  width: 100%;
  display: flex; flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const JudgeCard = styled.div`
  display: flex;
  width: 33%; min-width: 250px; height: 80px;
  margin: 10px 0;
`;

export const JudgeImg = styled.img`
  width: 80px;
  object-fit: cover;
  border-radius: 50%;
`;

export const JudgeInfo = styled.div`
  ${props => props.theme.flex.column};
  padding: 10px;
`;

export const TagsCardWide = styled(CardWide)`
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

export const TagCard = styled.div`
  ${props => props.theme.flex.column};
  border: 2px solid ${props => props.theme.color.grey.light};
  margin-bottom: 10px;
  padding: 10px;
`;

export const UserContainer = styled.div`
  ${props => props.theme.flex.columnCenter};
  padding-bottom: 0;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 30px;
  margin: 10px 0 5px;
`;

export const PHosted = styled(Paragraph)`
  margin-bottom: 0;
  font-weight: bold;
  font-size: 16px;
  color: ${props => props.theme.color.primary.regular};
`;