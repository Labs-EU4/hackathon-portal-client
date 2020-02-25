import styled from "styled-components";
import { Solid, media } from "../index";

export const Card = styled.div`
  ${props => props.theme.shadow.card};
  ${props => props.theme.flex.custom('space-between', 'start', 'column')};
  position: relative;
  background-color: ${Solid.WHITE};
  width: 300px;
  min-height: 380px;
  border-radius: 6px;
  margin: 10px;
  overflow: hidden;

  & > div {
    padding: 20px;
  }
`;

export const CardWide = styled(Card)`
  max-width: 650px;
  width: 100%;
  padding: 40px;

  @media ${media.tablet} {
    width: 100%;
  }

  @media ${media.mobile} {
    width: 100%;
  }
`;

export const CardForm = styled(Card)`
  width: 650px;
  padding: 40px;
  height: auto;

  @media ${media.tablet} {
    width: 100%;
    padding: 20px;
    margin: 0;
    justify-content: start;
  }

  @media ${media.mobile} {
    width: 100%;
    padding: 15px;
    margin: 0;
    justify-content: start;
  }
`;