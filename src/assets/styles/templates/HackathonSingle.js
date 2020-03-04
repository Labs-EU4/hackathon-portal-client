import styled from "styled-components";

import { media } from "../variables/media";
import { BoldSpan, NormalSpan } from "../atoms/Span";
import { CardWide } from "../atoms/Card";

export const SpanContent = styled(BoldSpan)`
  ${props => props.theme.fontSize.medium};
  font-weight: bold; 
  text-transform: capitalize;
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
  padding: 60px 20px;
  z-index: 100;
`;

export const StyledEventCard = styled(CardWide)`
  position: relative;
  min-width: ${({ menuOpen }) => menuOpen ? 'calc(100% - 60px)' : 'calc(100% - 250px)'};
  height: calc(100vh - 110px);
  background-color: ${props => props.active ? 'rgba(0, 0, 0, .8)' : props.theme.color.grey.bg};
  transform: ${props => props.active && 'translateY(80%)'};
  padding-left: 45px;
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
  position: fixed; left: ${({ menuOpen }) => menuOpen ? 'calc(100% - 395px)' : 'calc(100% - 585px)'}; 
  top: 70px;
  display: ${({ active }) => active && 'none'};
  width: 300px; max-height: calc(100vh - 130px);
  /* border: 1px solid ${props => props.theme.color.primary.regular}; */
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
  ${props => props.theme.fontSize.medium};
  margin-bottom: 0;
  font-weight: bold;
  color: ${props => props.theme.color.black.regular};
`;

export const ExitButton = styled.p`
  ${props => props.theme.flex.center};
  ${props => props.theme.shadow.box};
  position: fixed; top: 77px; left: 35px;
  width: 35px; height: 35px;
  background-image: linear-gradient(to right, 
    ${props => props.theme.color.white.regular} 50%, 
    ${props => props.theme.color.primary.regular} 50%, 
    ${props => props.theme.color.primary.regular} 100%);
  background-size: 204%;
  border-radius: 50%;
  color: ${props => props.theme.color.black.regular};
  transition: all .2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-position: 100%;
    color: ${props => props.theme.color.white.regular};
  }
`;