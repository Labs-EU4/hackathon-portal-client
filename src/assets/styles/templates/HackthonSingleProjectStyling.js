import styled from "styled-components";

import { media } from "../variables/media";
import { Paragraph } from "../atoms/ParagraphStyling";
import { WideBody } from "../atoms/WideBodyStyling";
import Button from "../../../components/atoms/Button";
import { H3 } from "../atoms/HeadingStyling";

export const StyledWideBody = styled(WideBody)`
  ${props => props.theme.flex.center};
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 300;
`;

export const ProjectCard = styled.div`
  min-width: 80%;
  max-width: 700px;
  max-height: calc(100vh - 80px);
  background-color: black;
  border: 2px solid rgb(0, 255, 70);
  border-radius: 5px;
  padding: 20px 30px;
  box-shadow: 3px 3px 10px black;
`;

export const Team = styled.div`
  width: 100%;
  border-bottom: 1px solid #c8c8c8;
  padding: 0 0 10px 0;
  margin: 0 0 20px 0;

  h3 {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const Strong = styled.strong`
  font-weight: bold;
`;

export const Description = styled.div`
  border-bottom: 1px solid #c8c8c8;
  margin-bottom: 20px;
  padding: 20px;
  padding-top: 0;
`;

export const SubmissionEntry = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

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

export const CenterItems = styled.div`
  ${props => props.theme.flex.center};
`;

export const Rubrics = styled.div`
  ${props => props.theme.flex.center};
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid #c8c8c8;
  padding: 0 10px 20px;

  @media ${media.tablet} {
    justify-content: center;
  }

  div {
    ${props => props.theme.flex.columnCenter};
    margin: 0 10px;
  }
`;

export const RubricRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  & > span {
    margin-top: 5px;
  }
`;

export const Feedback = styled.textarea`
  font-size: 16px;
  font-weight: 500;
  color: #212121;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 10px;
  margin: 0 0 10px 0;
  min-height: 100px;

  &:focus {
    transition: all 0.5s;
    box-shadow: 0 0 3px #ddd;
  }

  ${({ wide }) =>
    wide &&
    `
    width: 100%;
  `};
`;

export const JudgeView = styled.div`
  border-radius: 6px;
  border: 1px solid #e8e8e8;
  padding: 20px;
  background-color: #f2f2f2;
  width: 100%;
`;

export const StyledParagraph = styled(Paragraph)`
  ${props => props.theme.flex.center};
  margin: 10px 0;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1.2px;
  line-height: 1.4;
`;

export const ButtonGroup = styled.div`
  a,
  button {
    width: 100%;
    display: block;
    margin: 0 0 10px 0;
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  margin: 0 5px;

  & > span {
    margin-left: 5px;
  }
`;

export const StyledH3 = styled(H3)`
  color: rgb(0, 255, 70);
`;
