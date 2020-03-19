import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";

import {
  StyledWideBody,
  BodyRow,
  BodyColumn,
  Form
} from '../../assets/styles/templates/CreateTeamStyling';
import { RowHead } from "../../assets/styles/atoms/RowHeadStyling";
import { H3 } from "../../assets/styles/atoms/HeadingStyling";
// import WideBody from "../../assets/styles/atoms/WideBodyStyling";
import Button from "../atoms/Button";
import AddParticipantTeam from "../templates/AddParticipantTeams";
import TeamView from "./TeamView";
import { createTeamName } from "../../store/participantTeams/actions";
import { useTeams } from "../../hooks";

const CreateTeam = ({ id }) => {
  const [isAddTeamMemberOpen, setIsAddTeamMemberOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  // const { id } = useParams();
  const { userId } = useSelector(state => state.currentUser);
  const [teams, fetchTeams] = useTeams(id);
  const team = teams.find(t => t.team_lead === userId);

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  const handleTeamSubmit = values => {
    const teamData = {
      team_name: values.team_name,
      eventId: id
    };
    dispatch(createTeamName(teamData, history));
    //!!HAVE A STATE THAT OPENS THE SELECT TEAM MEMBER COMPONENT HERE TO REDIRECT, ALSO FROM HERE CLOSE THE CREATETEAM COMPONENT
    //REDIRECT TO THE ADDPARTICIPANTTEAMS COMPONENT
    setIsAddTeamMemberOpen(true);
  };

  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );

  const renderTeamComponent = () => {
    return (
      <StyledWideBody>
      <BodyRow>
        <RowHead>
          <H3>Participant Teams</H3>
        </RowHead>
        <BodyColumn>
          {!team ? (
            <Formik
              initialValues={{ team_name: "" }}
              onSubmit={handleTeamSubmit}
            >
              {props => (
                <Form onSubmit={props.handleSubmit}>
                  <h4>
                    You are creating a team for{" "}
                    <span
                      style={{ color: "#273F92", backgroundColor: "aliceblue" }}
                    >
                      {event_title}
                    </span>
                  </h4>
                  <label>Team Name</label>
                  <input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="team_name"
                  />
                  <Button type="submit" color="green">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          ) : (
            <TeamView 
              {...{ team }} 
              {...{isAddTeamMemberOpen}}
              {...{setIsAddTeamMemberOpen}}
            />
          )}
        </BodyColumn>
      </BodyRow>
      </StyledWideBody>
    );
  }

  if (isAddTeamMemberOpen) {
    return (
      <AddParticipantTeam
        eventId={id}
        teamId={team.id}
        {...{setIsAddTeamMemberOpen}}
      />
    ) 
  }

  return renderTeamComponent();
};

export default CreateTeam;
