import { type, Solid, media } from "../variables/index";
import BodyContainerO from "../atoms/BodyContainer";
import styled from "styled-components";
import React from 'react'


export const BodyContainerColumn = styled(props => (
  <BodyContainerO {...props} />
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
