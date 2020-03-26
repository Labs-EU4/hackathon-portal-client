import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Button from "../atoms/Button";
import { resetUser } from "../../store/user/actions";
// import { media } from '../../assets/styles/variables/media';

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
      {userId ? (
        <StyledButton 
          data-testid="label" 
          onClick={handleLogOut}
        >Log Out</StyledButton>
      ) : (
        <>
          <Button
            link
            color="primary-reverse"
            to={state?.from ? `/login?ref=${state?.from}` : `/login`}
          >
            Log In
          </Button>
          <Button
            link
            color="primary"
            to={state?.from ? `/register?ref=${state?.from}` : `/register`}
          >
            Join Free
          </Button>
        </>
      )}
    </StyledPublicNav>
  );
};

export default PublicNav;

const StyledPublicNav = styled.div`
  margin-left: auto;

  & a:first-child {
    margin: 0 10px 0 0;
  }
`;

const StyledButton = styled.button`
  background-color: rgba(0, 0, 0, .5);
  border: 3px solid rgb(0, 255, 70);
  transition: background-color 0.1s ease;
  color: rgb(0, 255, 70);
`;
