import React, { useState } from "react";
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
import { SearchWidget, RoleWidget, InviteWidget } from "./widgets";
import { addParticipantTeamMember, sendParticipantInvite } from "../../store/participantTeams/actions";

const AddParticipantTeam = () => {

  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { eventId, teamId } = useParams();
  const [noneUser, setNoneUser] = useState(null);

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
              {
                !selectedUser ? (
                  <SearchWidget
                    setSelectedUser={setSelectedUser}
                    setNoneUser={setNoneUser}
                  />
                ) : (
                    <RoleWidget
                      selectedUser={selectedUser}
                      handleSubmit={handleSubmit}
                    />
                  )

              }
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

