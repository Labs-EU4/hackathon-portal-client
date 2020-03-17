import { type, Solid, media } from "../variables/index";
import { BodyContainer, BodyContainerN } from "../atoms/BodyContainerStyling";
import { CardWideN } from "../atoms/Card";
import Icon from "../../../components/atoms/IconN";
import styled from "styled-components";
import React from "react";

export const BodyContainerColumn = styled(props => (
  <BodyContainer {...props} />
))`
  flex-direction: column;
  justify-content: start;
`;

export const StyledContainer = styled.div`
  display: block;
  position: relative;
`;

export const StyledWidget = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Container = styled.div`
  input {
    font-family: ${type.ROBOTO};
    font-size: 16px;
    font-weight: 500;
    color: ${Solid.BLACK};
    border: 1px solid ${Solid.BORDER_GREY};
    border-radius: 6px;
    padding: 10px;
    margin: 0 20px 10px 0;
    ${({ display }) => (display === "wide" ? `width: 100%;` : `width: 180px;`)}

    &:focus {
      transition: all 0.5s;
      box-shadow: 0 0 3px #ddd;
    }
  }

  @media ${media.tablet} {
    width: 100%;
    margin-right: 0;
  }
`;

export const ContainerRadio = styled.label`
  /* Customize the label (the container) */
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Hide the browser's default radio button */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    /* When the radio button is checked, add a blue background */
    &:checked ~ span {
      background-color: #2196f3;
    }

    /* Show the indicator (dot/circle) when checked */
    &:checked ~ span:after {
      display: block;
    }
  }

  /* Create a custom radio button */
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;

    /* Create the indicator (the dot/circle - hidden when not checked) */
    &:after {
      content: "";
      position: absolute;
      display: none;

      /* Style the indicator (dot/circle) */
      top: 9px;
      left: 9px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }
  }

  /* On mouse-over, add a grey background color */
  &:hover {
    input ~ span {
      background-color: #ccc;
    }
  }
`;

// --------------------------------- NEW // --------------------------------- //

export const BodyContainerColumnN = styled(BodyContainerN)`
  flex-direction: column;
  justify-content: start;
`;

export const StyledContainerN = styled.div`
  display: block;
  position: relative;
`;

export const StyledWidgetN = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;

export const ContainerRadioN = styled.label`
  /* Customize the label (the container) */
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* Hide the browser's default radio button */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    /* When the radio button is checked, add a blue background */
    &:checked ~ span {
      background-color: ${props => props.theme.color.blue.bg};
    }
    /* Show the indicator (dot/circle) when checked */
    &:checked ~ span:after {
      display: block;
    }
  }
  /* Create a custom radio button */
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
    /* Create the indicator (the dot/circle - hidden when not checked) */
    &:after {
      content: "";
      position: absolute;
      display: none;
      /* Style the indicator (dot/circle) */
      top: 9px;
      left: 9px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }
  }
  /* On mouse-over, add a grey background color */
  &:hover {
    input ~ span {
      background-color: #ccc;
    }
  }
`;

//SEARCH WIDGET
export const ContainerN = styled.div`
  position: relative;
  input {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${props => props.theme.color.black.regular};
    border: 2px solid ${props => props.theme.color.grey.regular};
    border-radius: 6px;
    padding: 10px;
    ${({ display }) => (display === "wide" ? `width: 100%;` : `width: 180px;`)}
    &:focus {
      border: 2px solid ${props => props.theme.color.primary.regular};
      transition: all 0.4s ease;
      box-shadow: 0 0 3px #ddd;
      & + svg {
        color: ${props => props.theme.color.primary.regular};
      }
    }
  }
  @media ${media.tablet} {
    width: 100%;
    margin-right: 0;
  }
`;

export const UsersListN = styled.div`
  ${props => props.theme.shadow.box};
  width: 100%;
  height: 48.25vh;
  border: 2px solid ${props => props.theme.color.primary.regular};
  border-bottom: none;
  margin: 10px 0 0;
  padding-bottom: 15px;
  overflow-y: scroll;
  user-select: none;
  &::-webkit-scrollbar-button {
    background-color: blue;
  }
`;

export const ChosenJudgesContainerN = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: ${props => props.theme.color.white.regular};
  border: 2px solid ${props => props.theme.color.primary.regular};
  border-radius: 20px;
  margin-top: -15px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  overflow-x: scroll;
  z-index: 500;
`;

export const ChosenJudgeImgN = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  margin-left: 5px;
  object-fit: cover;
`;

export const StyledSearchIconN = styled(Icon)`
  position: absolute; top: 10px; left: calc(100% - 30px);
  transform: rotate(90deg);
  cursor: pointer;
  &:hover {
    transform: scale(1.1) rotate(90deg);
  }
`;

export const StyledWideBodyN = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

export const StyledCardWideN = styled(CardWideN)`
  ${props => props.theme.shadow.box};
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  z-index: 200;
`;

//JUDGE WIDGET
export const StyledJudgeWidgetN = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  width: calc(100% - 10px);
  background-color: ${props => props.theme.color.white.regular};
  border: 2px solid ${props => props.theme.color.black.regular};
  border-radius: 3px;
  padding: 5px 10px;
  margin-bottom: 2px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.color.primary.regular};
    color: ${props => props.theme.color.white.regular};
  }
  &.selected {
    background-color: ${props => props.theme.color.primary.regular};
    opacity: 0.5;
  }
`;

export const UserAvatarN = styled.figure`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  & > img {
    width: 100%;
  }
`;

export const UserInfoN = styled.div`
  ${props => props.theme.flex.custom("center", "flex-start", "column")};
  margin-left: 5px;
  p {
    &:last-child {
      ${props => props.theme.fontSize.small};
      font-weight: normal;
    }
  }
`;
