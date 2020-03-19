import React from 'react';

import Button from "../atoms/Button";
import { RowBody } from "../../assets/styles/atoms/RowBodyStyling";
import { StyledContainer } from "../../assets/styles/templates/AddParticipantTeamsStyling";

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