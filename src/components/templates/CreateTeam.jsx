import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import { registerEvent } from "../../store/eventParticipants/actions";
import {
  StyledWideBody,
  BodyRow,
  BodyColumn,
  Form
} from "../../assets/styles/templates/CreateTeamStyling";
import Button from "../atoms/Button";
import AddParticipantTeam from "../templates/AddParticipantTeams";
import TeamView from "./TeamView";
import { createTeamName } from "../../store/participantTeams/actions";
import { useTeams } from "../../hooks";

const CreateTeam = ({ id, setRegisterTeam }) => {
  const [isAddTeamMemberOpen, setIsAddTeamMemberOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useSelector(state => state.currentUser);
  const [teams, fetchTeamsState] = useTeams(id);
  const { teamId } = useSelector(state => state.participantTeams);
  const team = teams.find(t => t.team_lead === userId);
  const [currentTeamId, setCurrentTeamId] = useState();

  useEffect(() => {
    fetchTeamsState();
  }, [fetchTeamsState]);
  console.log(teamId, currentTeamId);
  const handleTeamSubmit = async values => {
    const teamData = {
      team_name: values.team_name,
      eventId: id,
      teamLeadId: userId
    };
    // Error handling issue - needs to be a unique name
    await dispatch(createTeamName(teamData, history));
    await dispatch(registerEvent(id));
    //!!HAVE A STATE THAT OPENS THE SELECT TEAM MEMBER COMPONENT HERE TO REDIRECT, ALSO FROM HERE CLOSE THE CREATETEAM COMPONENT
    //REDIRECT TO THE ADDPARTICIPANTTEAMS COMPONENT
    // await setIsAddTeamMemberOpen(true);
    await setRegisterTeam(false);
    window.location.reload(true);
  };

  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );

  const addTeamMemberHandler = (bool, teamId) => {
    setIsAddTeamMemberOpen(bool);
    setCurrentTeamId(teamId);
  };

  const renderTeamComponent = () => {
    return (
      <StyledWideBody>
        <BodyRow>
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
                        style={{
                          color: "#273F92",
                          backgroundColor: "aliceblue"
                        }}
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
                {...{ isAddTeamMemberOpen }}
                {...{ addTeamMemberHandler }}
                {...{ setRegisterTeam }}
              />
            )}
          </BodyColumn>
        </BodyRow>
      </StyledWideBody>
    );
  };

  if (isAddTeamMemberOpen && currentTeamId) {
    return (
      <AddParticipantTeam
        eventId={id}
        teamId={teamId}
        {...{ currentTeamId }}
        {...{ setIsAddTeamMemberOpen }}
      />
    );
  }

  if (isAddTeamMemberOpen) {
    return (
      <AddParticipantTeam
        eventId={id}
        teamId={teamId}
        {...{ teamId }}
        {...{ setIsAddTeamMemberOpen }}
      />
    );
  }

  return renderTeamComponent();
};

export default CreateTeam;
