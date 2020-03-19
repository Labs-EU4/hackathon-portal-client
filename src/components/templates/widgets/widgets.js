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
import { 
  Container,
  ContainerRadio
} from "../../assets/styles/templates/AddTeammatesStyling";
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

export const ParticipantRoleWidget = props => {
  const { selectedUser, handleSubmit} = props;
  const history = useHistory();
  const redirect = (location = "/dashboard") => {
    history.push(location);
  };

  return (
    <StyledContainer>
      <RowBody direction="column-reverse">
        <h6>
          You are adding{" "}
          <span style={{ color: "#273F92", backgroundColor: "aliceblue" }}>
            {selectedUser.email}
          </span>{" "}
          to your team
        </h6>
      </RowBody>
      <RowBody>
        <Button color="grey" onClick={() => redirect()}>
          Back to dashboard
        </Button>
        <Button
          color="green"
          onClick={selectedUser => handleSubmit(selectedUser)}
        >
          Add teammate
        </Button>
      </RowBody>
    </StyledContainer>
  );
};

export const ParticipantInviteWidget = props => {
  const noneUser = props.noneUser;
  const sendInvite = props.sendInvite;

  return (
    <StyledContainer>
      <RowBody direction="column-reverse">
        <h6>
          This user is not on this platform. click send to invite{" "}
          <span style={{ color: "#273F92", backgroundColor: "aliceblue" }}>
            {noneUser}
          </span>{" "}
          to join your team
        </h6>
      </RowBody>
      <RowBody>
        <Button color="green" onClick={noneUser => sendInvite(noneUser)}>
          Send Invite
        </Button>
      </RowBody>
    </StyledContainer>
  );
};

const Radio = ({ label, value, type = "radio", ...radioProps }) => {
  return (
    <ContainerRadio>
      {label || value}
      <input type={type} {...radioProps} />
      <span></span>
    </ContainerRadio>
  );
};