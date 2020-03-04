import React, { useEffect, useRef } from "react";
import Button from "../atoms/Button";
import { RowBody } from "../atoms/RowBody";
import { useHistory } from "react-router-dom";
import { useSearchUserByEmail } from "../../hooks";
import {
  StyledContainer,
  Container,
  StyledWidget
} from "../styles/templates/AppParticipantTeams";
import { ContainerRadio } from "../styles/templates/AddTeammatesStyling";
import isEmail from "validator/lib/isEmail";


export const UserWidget = ({ user, select, ...otherProps }) => {
  return (
    <StyledWidget key={user.id} onClick={() => select(user)} {...otherProps}>
      {user.email}
    </StyledWidget>
  );
};

export const SearchWidget = props => {

  const setSelectedUser = props.setSelectedUser;
  const setNoneUser = props.setNoneUser;
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
    <Container display="wide">
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
      <Button color="grey" onClick={() => redirect(history)}>
        Back to dashboard
      </Button>
    </Container>
  );
};


export const ParticipantRoleWidget = props => {
  const selectedUser = props.selectedUser;
  const handleSubmit = props.handleSubmit;
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

export const TeamRoleWidget = (props) => {
  const setRole = props.setRole;
  const role = props.role
  const handleSubmit = props.handleSubmit;
  const history = useHistory();

  const redirect = (location = "/dashboard") => {
    history.push(location);
  };
  return (
    <StyledContainer>
      <RowBody direction="column-reverse">
        <Radio
          label="organizer"
          name="role"
          onChange={() => setRole("organizer")}
          checked={role === "organizer"}
        />
        <Radio
          name="role"
          label="judge"
          onChange={() => setRole("judge")}
          checked={role === "judge"}
        />
      </RowBody>
      <RowBody>
        <Button color="grey" onClick={() => redirect()}>
          Back to dashboard
        </Button>
        <Button color="green" onClick={handleSubmit}>
          Add teammate
        </Button>
      </RowBody>
    </StyledContainer>
  );
};

export const TeamInviteWidget = props => {
  const noneUser = props.noneUser;
  const sendInvite = props.sendInvite;
  const setRole = props.setRole;
  const role = props.role

  return (
    <StyledContainer>
      <RowBody direction="column-reverse">
        <h6>
          This user is not on this platform. Please select a role for
        click send to invite {" "}
          <span style={{ color: "#273F92", backgroundColor: "aliceblue" }}>
            {noneUser}
          </span>{" "}
          to join your team
      </h6>
      </RowBody>
      <RowBody direction="column-reverse">
        <Radio
          label="organizer"
          name="role"
          onChange={() => setRole("organizer")}
          checked={role === "organizer"}
        />
        <Radio
          name="role"
          label="judge"
          onChange={() => setRole("judge")}
          checked={role === "judge"}
        />
      </RowBody>
      <RowBody>
        <Button color="green" onClick={sendInvite}>
          Send Invite
      </Button>
      </RowBody>
    </StyledContainer>
  );
};