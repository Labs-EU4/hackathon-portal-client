import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Button from "../atoms/Button";
import { resetUser } from "../../store/user/actions";
import { media } from '../../assets/styles/variables/media';

const PublicNav = () => {
  const { userId } = useSelector(state => state.currentUser);
  const { state } = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleLogOut = () => {
    dispatch(resetUser(history));
  };

  return (
    <StyledPublicNav>
      {
        userId ? (
          <button onClick={handleLogOut}>Log Out</button>
        ) : (
          <>
            <Button 
              anchor 
              to={state?.from ? `/login?ref=${state?.from}` : `/login`}
            >Log In</Button>
            <Button 
              anchor 
              color="blue" 
              to={state?.from ? `/register?ref=${state?.from}` : `/register`}
            >Sign Up</Button>
          </>
        )
      }
      
    </StyledPublicNav>
  );
}

export default PublicNav;

const StyledPublicNav = styled.div`
  margin-left: auto;
  
  & a:first-child {
    margin: 0 10px 0 0;
  }

  & > button {
    display: inline-block;
    background-color: transparent; 
    border: 2px solid black; border-radius: 3px;
    outline: none;
    padding: 12px 34px;
    font-size: ${props => props.theme.fontSize.small};
    font-weight: 700;
    color: ${props => props.theme.color.black.regular};
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      ${props => props.theme.shadow.card};
      border: 2px solid ${props => props.theme.color.primary.regular};
    }

    @media ${media.tablet} {
      width: 100%;
      padding: 12px;
      margin: 0 0 15px 0;
    }

    @media ${media.mobile} {
      padding: 10px;
    }
  }
`;
