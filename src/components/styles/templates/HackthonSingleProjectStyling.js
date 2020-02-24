import styled from "styled-components";
import { media } from "../../index";


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

export const Description = styled.div`
  display: block;
  margin: 0;
  border-bottom: 1px solid #c8c8c8;
  padding: 0 0 20px 0;
  margin: 0 0 20px 0;
`;

export const SubmissionEntry = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
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

export const Rubrics = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  border-bottom: 1px solid #c8c8c8;
  padding: 10px 0 20px 0;
  margin: 0 0 20px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media ${media.tablet} {
    justify-content: center;
  }

  div {
    margin: 0 30px 20px 0;
    display: flex;
    flex-direction: column;
  }
`;

export const RubricRow = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;

  & > span {
    margin: 10px 0 0 10px;
  }
`;

export const Feedback = styled.textarea`
  font-family: "Roboto", sans-serif;
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

export const ButtonGroup = styled.div`
  a,
  button {
    width: 100%;
    display: block;
    margin: 0 0 10px 0;
  }
`;
