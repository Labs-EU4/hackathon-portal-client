import React, { useState, useEffect, useRef } from "react";
import isEmail from 'validator/lib/isEmail';
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { BodyContainerColumn, StyledContainer, Container, StyledWidget } from "../styles/templates/AppParticipantTeams";
import { Footer, UserHeader } from "../organisms";
// import UserHeader from "../organisms/UserHeader";
import WideBody from "../atoms/WideBody";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import Button from "../atoms/Button";
import { addParticipantTeamMember, sendParticipantInvite } from "../../store/participantTeams/actions";
import { useSearchUserByEmail } from "../../hooks";
import Nav from "../molecules/Nav";

const AddParticipantTeam = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { eventId, teamId } = useParams();
  const [matches, searchString, setSearchString] = useSearchUserByEmail();
  const [noneUser, setNoneUser] = useState(null);
  const validateEmail = (email) => {
    return isEmail(email);
  }

  const handleSubmit = () => {
    const data = {
      team_id: teamId,
      team_member: selectedUser.id,
      eventId: eventId
    };
    dispatch(addParticipantTeamMember(data, history));
  };

  const sendInvite = () => {
    const data = {
      teamId,
      email: noneUser,
      eventId
    };
    dispatch(sendParticipantInvite(data, history))
  }
  const redirect = (location = "/dashboard") => {
    history.push(location);
  };

  const UserWidget = ({ user, select, ...otherProps }) => {

    return (
      <StyledWidget key={user.id} onClick={() => select(user)} {...otherProps}>
        {user.email}
      </StyledWidget>
    );
  };

  const SearchWidget = () => {
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
        {
          !!matches && validateEmail(searchString) ? setNoneUser(searchString) : setNoneUser(null)
        }
        <Button color="grey" onClick={() => redirect()}>
          Back to dashboard
        </Button>
      </Container>
    );
  };

  const RoleWidget = () => {
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
          <Button color="green" onClick={handleSubmit}>
            Add teammate
          </Button>
        </RowBody>
      </StyledContainer>
    );
  };
  /*** Renders message and button to send invite email * To be refactored to a resuable component * @ returns */
  const InviteWidget = () => {
    return (
      <StyledContainer>
        <RowBody direction="column-reverse">
          <h6>
            This user is not on this platform.
            click send to invite {" "}
            <span style={{ color: "#273F92", backgroundColor: "aliceblue" }}>
              {noneUser}
            </span>{" "}
            to join your team
          </h6>
        </RowBody>
        <RowBody>
          <Button color="green" onClick={sendInvite}>
            Send Invite
          </Button>
        </RowBody>
      </StyledContainer>
    );
  };

  return (
    <div>
      <UserHeader />
      <WideBody>
        <Nav />
        <BodyContainerColumn>
          <RowHead>
            <H3>Add Teammates</H3>
          </RowHead>
          <Column>
            <CardWide>
              {!selectedUser ? <SearchWidget /> : <RoleWidget />}
              {noneUser ? <InviteWidget /> : null}
            </CardWide>
          </Column>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default AddParticipantTeam;
