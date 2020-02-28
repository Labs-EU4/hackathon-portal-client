import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createTeamName } from "../../store/participantTeams/actions";
import { Formik } from "formik";
import {
  BodyRow,
  BodyColumn,
  Form,
  Title
} from "../styles/templates/CreateTeamStyling";
import { Footer } from "../organisms/index";
import UserHeader from "../organisms/UserHeader";
import { RowHead } from "../atoms/RowHead";
import { H3 } from "../atoms/Heading";
import Button from "../atoms/Button";
import TeamView from "./TeamView";
import { useTeams } from "../../hooks";
import WideBody from "../atoms/WideBody";
import Nav from "../molecules/Nav";

const CreateTeam = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { userId } = useSelector(state => state.currentUser);
  const [teams, fetchTeams] = useTeams(id);
  const team = teams.find(t => t.team_lead === userId);
debugger
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
debugger
  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );
debugger
  return (
    <div>
      <UserHeader />
      <WideBody>
        <Nav />
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
                      You are creating a team for <Title>{event_title}</Title>
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
      <Footer />
    </div>
  );
};

export default CreateTeam;
