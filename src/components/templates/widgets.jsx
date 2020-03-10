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
  ContainerRadio,
  UsersList,
  ChosenJudgesContainer,
  ChosenJudgeImg,
  StyledSearchIcon,
  StyledJudgeWidget,
  UserAvatar,
  UserInfo
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

export const JudgesSearchWidget = props => {
  const { 
    selectedUsersHandler, 
    selectedUserArr,
    setNoneUser,
    handleExit,
    handleSubmit,
  } = props;
  const [matches, searchString, setSearchString] = useSearchUserByEmail();
  const validateEmail = email => {
    return isEmail(email);
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
      {
        searchString.length > 0 
          ? <StyledSearchIcon icon="times" onClick={() => setSearchString('')}/> 
          : <StyledSearchIcon icon="search" />
      }
      <div style={{ display: "flex", flexDirection: "column"}}>
        <UsersList>
          {matches.map(user => (
            // <UserWidget key={user.id} user={user} select={setSelectedUser} />
            <JudgeWidget key={user.id} user={user} selected={selectedUsersHandler} />
          ))}
          {
            !!matches && validateEmail(searchString) 
              ? setNoneUser(searchString) 
              : setNoneUser(null)
          }
        </UsersList>
        <ChosenJudgesContainer>
          {
            selectedUserArr.current.length > 0 && (
              selectedUserArr.current.map(user => {
                let memberProfile = JSON.parse(user.image_url);
                return user.image_url !== null ? (
                  <ChosenJudgeImg src={memberProfile.avatar} alt={user.username}/>
                ) : (
                  <ChosenJudgeImg 
                    src="https://media.giphy.com/media/g0QET2Iejaa4EQ0eBV/giphy.gif" alt="default-img" 
                  />
                )
              }) 
            )
          }
        </ChosenJudgesContainer>
      </div>
      <RowBody>
        <Button 
          color="grey" 
          size="half" 
          onClick={handleExit}
        >Back</Button>
        <Button 
          color="green" 
          size="half" 
          onClick={handleSubmit}
        >Add Judge</Button>
      </RowBody>
    </Container>
  );
};

const JudgeWidget = ({ user, selected, ...otherProps }) => {
  let memberProfile = JSON.parse(user.image_url);

  const selectedJudgeHandler = (e) => {
    e.currentTarget.classList.add('selected');
    // Add option to deselect user with conditional to check for that
    selected(user);
  }

  return (
    <StyledJudgeWidget 
      key={user.id} 
      // onClick={() => selected(user)} 
      onClick={selectedJudgeHandler} 
      {...otherProps}
    >
      <UserAvatar>
        {
          user.image_url !== null ? (
            <img src={memberProfile.avatar} alt={user.username}/>
          ) : (
            <img 
              src="https://media.giphy.com/media/g0QET2Iejaa4EQ0eBV/giphy.gif" alt="default-img" 
            />
          )
        }
      </UserAvatar>
      <UserInfo>
        <p>{user.username}</p>
        <p>{user.email}</p>
      </UserInfo>
    </StyledJudgeWidget>
  );
};