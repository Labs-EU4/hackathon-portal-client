import React from 'react';

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