import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from "../../atoms/Button";
import Radio from "../../molecules/Radio";
import { RowBody } from "../../../assets/styles/atoms/RowBodyStyling";
import { StyledContainer } from "../../../assets/styles/templates/AddParticipantTeamsStyling";

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