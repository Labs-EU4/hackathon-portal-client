import React, { useState } from "react";
import isEmail from 'validator/lib/isEmail';
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { BodyContainerColumn } from "../styles/templates/AppParticipantTeams";
import { Footer } from "../organisms";
import UserHeader from "../organisms/UserHeader";
import WideBody from "../atoms/WideBody";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import Nav from "../molecules/Nav";
import { useSearchUserByEmail } from "../../hooks";
import { SearchWidget, RoleWidget, InviteWidget } from "./widgets";
import { addParticipantTeamMember, sendParticipantInvite } from "../../store/participantTeams/actions";

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

  const sendInvite = (props) => {
    const data = {
      teamId,
      email: noneUser,
      eventId
    };
    props.dispatch(sendParticipantInvite(data, history))
  }

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
              {!selectedUser ? <SearchWidget setSelectedUser={setSelectedUser} setNoneUser={setNoneUser} eventId={eventId} teamId={teamId} matches={matches} searchString={searchString} setSearchString={setSearchString} validateEmail={validateEmail} />
                : <RoleWidget selectedUser={selectedUser} handleSubmit={handleSubmit} />}
              {noneUser ? <InviteWidget noneUser={noneUser} sendInvite={sendInvite} /> : null}
            </CardWide>
          </Column>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default AddParticipantTeam;

