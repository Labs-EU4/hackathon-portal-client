import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory, useLocation } from "react-router-dom";

import {
  StyledWideBody,
  StyledCardWide
} from "../../assets/styles/templates/AddTeammatesStyling";
import { H3 } from "../../assets/styles/atoms/HeadingStyling";
import { RowHead } from "../../assets/styles/atoms/RowHeadStyling";
import { Column } from "../../assets/styles/atoms/ColumnStyling";
import { sendEventTeamInvite } from "../../store/events/actions";
import { addParticipantTeamMember } from "../../store/participantTeams/actions"
import { JudgesSearchWidget } from "./widgets/JudgesSearchWidget";
import { TeamInviteWidget } from "./widgets/TeamInviteWidget";

const AddTeammates = ({ setIsAddJudgeOpen }) => {
  const selectedUserArr = useRef([]);
  const role = "judge";
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  const [noneUser, setNoneUser] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  const selectedUsersHandler = async addedUser => {
    const newArray = [...selectedUserArr.current, addedUser];
    selectedUserArr.current = newArray;
  };

  const handleSubmit = () => {
    selectedUserArr.current.map(selectedUser => {
      const { email } = selectedUser;
      const data = {
        eventId: Number(id),
        email,
        role
      };
      return dispatch(addParticipantTeamMember(data, history));
    });
    setIsAddJudgeOpen(false);
    history.push(`/${currentPath}`);
  };

  const handleExit = () => setIsAddJudgeOpen(false);

  const sendInvite = () => {
    const data = {
      eventId: Number(id),
      email: noneUser,
      role
    };
    dispatch(sendEventTeamInvite(data, history));
  };

  return (
    <StyledWideBody>
      <Column>
        <StyledCardWide>
          <RowHead>
            <H3
              data-testid="heading"
            >Add Judge</H3>
          </RowHead>
          <JudgesSearchWidget
            {...{ selectedUsersHandler }}
            {...{ selectedUserArr }}
            {...{ setNoneUser }}
            {...{ handleExit }}
            {...{ handleSubmit }}
          />
          {noneUser && (
            <TeamInviteWidget {...{ noneUser }} {...{ sendInvite }} />
          )}
        </StyledCardWide>
      </Column>
    </StyledWideBody>
  );
};

export default AddTeammates;
