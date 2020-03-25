import { NavLink } from "react-router-dom";
import styled from "styled-components";

import * as solid from "../variables/colors";
import { media } from "../variables/media";
import Button from '../../../components/atoms/Button';
import Icon from '../../../components/atoms/Icon';

export const StyledEditIcon = styled(Icon)`
  position: absolute; top: 20px; left: 90%;
  font-size: 20px;
  color: ${props => props.theme.color.green.regular};
  z-index: 50;
  transform: translate(-40%, -50%);
`;

export const StyledExpandIcon = styled(Icon)`
  position: absolute; bottom: 70px; left: 50%;
  font-size: 30px;
  transform: ${({ active }) => active === 'true' 
    ? 'translateX(-50%) rotate(90deg);' 
    : 'translateX(-50%) rotate(-90deg);'};
  
  cursor: pointer;

  &:hover {
    transform: ${({ active }) => active === 'true'
      ? 'translateX(-50%) rotate(90deg) scale(1.1);' 
      : 'translateX(-50%) rotate(-90deg) scale(1.1);'};
    color: ${props => props.theme.color.white.regular};
  }

  @media ${media.tablet} { 
    display: none;
  }
`;

export const UserInfoContent = styled.div`
  margin-left: 5px;

  p {
    &:first-child {
      font-size: 13px;
      color: ${props => props.theme.color.black.regular};
    }

    &:last-child {
      font-size: 10px;
      color: ${props => props.theme.color.grey.regular};
    }
  }

  @media ${media.tablet} { 
    display: none;
  }
`;

export const StyledNav = styled.div`
  grid-area: aside;
  position: relative;
  padding: ${({ active }) => active ? '90px 0' : '90px 20px 30px'};

  @media ${media.tablet} {
    width: 60px;
    padding: 90px 0;
  }

  &:first-child {
    margin-top: 10px;
  }
`;

export const StyledProfileImage = styled.div`
  position: relative;
  display: flex; align-items: center;
  width: 50px; height: 50px;
  background-color: transparent;
  border-radius: 50%;
  
  &:hover img {
    opacity: .4;
  }
`;

export const StyledNavLink = styled(NavLink)`
  ${props => props.theme.flex.custom('flex-start', 'flex-end')};
  width: 100%;
  margin-bottom: 10px; padding: 12px 0 8px 5px;
  color: ${props => props.theme.color.black.regular};
  font-weight: 600;
  text-decoration: none; text-align: left;
  transition: box-shadow 0.2s ease;
  white-space: nowrap;

  @media ${media.tablet} {
    span {
      display: none;
    }
  }

  svg {
    color: ${props => props.theme.color.white.regular};
    margin: 0 5px 0 12px;
  }

  svg path {
    fill: #9d9d9d;
    fill: ${props => props.theme.color.black.regular};
  }

  &:hover {
    background-color: ${props => props.theme.color.link.hover};
  }

  &:hover + div {
    visibility: visible;
  }

  &.current {
    ${props => props.theme.shadow.box};
    font-weight: bold;
    color: white;

    ${({ active }) => active 
      ? `border-right: 5px solid ${solid.blue}; border-radius: 0px; padding-left: 10px;` 
      : `border-left: 5px solid ${solid.blue}; border-radius: 6px;`
    }

    @media ${media.tablet} {
      border-right: 5px solid ${solid.blue}; border-left: none;
      border-radius: 0px; 
      padding-left: 10px;
    }

    svg {
      margin: 0 5px;
    }

    svg path {
      fill: ${props => props.theme.color.white.regular};
    }
  } 
`;

export const LinkDetails = styled.div`
  ${props => props.theme.flex.center};
  ${props => props.theme.shadow.box};
  position: absolute; top: 50%;
  height: 45px;
  background-color: #3BCEF2;
  border: 2px solid ${props => props.theme.color.primary.regular}; border-right: none;
  border-top-left-radius: 3px; border-bottom-left-radius: 3px;
  padding: 0 20px;
  transform: translate(-100%, -60%);
  z-index: 100;
  visibility: hidden;
`;

export const UserContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px 2px;
  border-radius: 2.5px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.color.link.hover};
  }
`;

export const StyledButton = styled(Button)`
  margin-bottom: 10px;
  font-size: 14px;
  ${({ active }) => active === 'true' && `
    padding: 5px 0;
    word-break: break-all;
  `}

  @media ${media.tablet} {
    display: none;
  }

  &:hover {
    border: 3px solid ${props => props.theme.color.primary.regular};
  }
`;