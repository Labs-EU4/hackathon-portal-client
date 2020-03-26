import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import {
  StyledWideBody,
  StyledCardWide
} from "../../assets/styles/templates/AddTeammatesStyling";
import { H3 } from "../../assets/styles/atoms/HeadingStyling";
import { RowHead } from "../../assets/styles/atoms/RowHeadStyling";
import { Column } from "../../assets/styles/atoms/ColumnStyling";
import { SearchUserWidget } from "./widgets/SearchUserWidget";
import { ParticipantInviteWidget } from "./widgets/ParticipantInviteWidget";
import {
  addParticipantTeamMember,
  sendParticipantInvite
} from "../../store/participantTeams/actions";

const AddParticipantTeam = ({
  eventId,
  setIsAddTeamMemberOpen,
  currentTeamId,
  teamId
}) => {
  const selectedUserArr = useRef([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  const [noneUser, setNoneUser] = useState(null);

  const selectedUsersHandler = async addedUser => {
    const newArray = [...selectedUserArr.current, addedUser];
    selectedUserArr.current = newArray;
  };

  const handleSubmit = () => {
    selectedUserArr.current.map(selectedUser => {
      const data = {
        team_id: currentTeamId ? currentTeamId : teamId,
        team_member: selectedUser.id,
        eventId: eventId
      };

      return dispatch(addParticipantTeamMember(data));

    });
    setIsAddTeamMemberOpen(false);
    history.push(`/${currentPath}`);
  };

  const handleExit = () => setIsAddTeamMemberOpen(false);

  const sendInvite = () => {
    const data = {
      currentTeamId,
      email: noneUser,
      eventId
    };
    dispatch(sendParticipantInvite(data, history))
  }

  return (
    <StyledWideBody>
      <Column>
        <StyledCardWide>
          <RowHead>
            <H3>Add Teammates</H3>
          </RowHead>
          <SearchUserWidget
            {...{ selectedUsersHandler }}
            {...{ selectedUserArr }}
            {...{ setNoneUser }}
            {...{ handleExit }}
            {...{ handleSubmit }}
          />
          {noneUser && (
            <ParticipantInviteWidget
              {...{ noneUser }}
              {...{ sendInvite }}
            />
          )}
        </StyledCardWide>
      </Column>
    </StyledWideBody>
  );
};

export default AddParticipantTeam;
