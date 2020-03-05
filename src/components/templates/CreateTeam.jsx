import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";

import {
  BodyRow,
  BodyColumn,
  Form
} from '../../assets/styles/templates/CreateTeam';
import { RowHead } from "../../assets/styles/atoms/RowHead";
import { H3 } from "../../assets/styles/atoms/Heading";
import WideBody from "../../assets/styles/atoms/WideBody";
import Button from "../atoms/Button";
import TeamView from "./TeamView";
import { createTeamName } from "../../store/participantTeams/actions";
import { useTeams } from "../../hooks";

const CreateTeam = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
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
  };

  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );

  return (
    <WideBody>
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
          <TeamView {...{ team }} />
        )}
      </BodyColumn>
    </BodyRow>
    </WideBody>
  );
};

export default CreateTeam;