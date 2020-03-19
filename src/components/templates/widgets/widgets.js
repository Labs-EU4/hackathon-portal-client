import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import Button from "../atoms/Button";
import { RowBody } from "../../assets/styles/atoms/RowBodyStyling";
import { useSearchUserByEmail } from "../../hooks";
import {
  StyledContainer,
  AddTeamParticipantContainer,
  StyledWidget
} from "../../assets/styles/templates/AddParticipantTeamsStyling";

import isEmail from "validator/lib/isEmail";


const UserWidget = ({ user, select, ...otherProps }) => {
  const StyledWidget = styled.div`
    margin-bottom: 10px;
    cursor: pointer;
  `;
  return (
    <StyledWidget key={user.id} onClick={() => select(user)} {...otherProps}>
      {user.email}
    </StyledWidget>
  );
};

export const SearchWidget = props => {
  const { setSelectedUser, setNoneUser } = props;
  const history = useHistory();
  const [matches, searchString, setSearchString] = useSearchUserByEmail();
  const validateEmail = email => {
    return isEmail(email);
  };
  const redirect = (location = "/dashboard") => {
    history.push(location);
  };
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <AddTeamParticipantContainer display="wide">
      <input
        type="text"
        value={searchString}
        onChange={e => {
          setSearchString(e.target.value);
        }}
        placeholder="Search by email"
        ref={inputRef}
      />
      {matches.map(user => (
        <UserWidget key={user.id} user={user} select={setSelectedUser} />
      ))}
      {!matches && validateEmail(searchString)
        ? setNoneUser(searchString)
        : setNoneUser(null)}
      <Button 
        color="grey" 
        onClick={() => redirect(history)}>
        Back to dashboard
      </Button>
    </AddTeamParticipantContainer>
  );
};