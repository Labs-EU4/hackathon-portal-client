import React from 'react';

import Button from "../atoms/Button";
import { RowBody } from "../../assets/styles/atoms/RowBodyStyling";
import { StyledContainer } from "../../assets/styles/templates/AddParticipantTeamsStyling";

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