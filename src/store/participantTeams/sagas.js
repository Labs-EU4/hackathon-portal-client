import { put, takeLatest, call, all, select } from "redux-saga/effects";
import {
  axiosWithAuth,
  selectToken,
  showSuccess,
  handleError
} from "../../utils/api";
import {
  ParticiPantTeamTypes,
  setTeams,
  setTeamMates,
  fetchTeams,
  fetchTeamId,
  fetchTeamMates,
  // deleteTeammate
} from "./actions";

export function* participantTeamSagas() {
  yield all([
    call(watchCreateTeamName),
    call(watchAddParticipantTeamMember),
    call(watchFetchTeamAsync),
    call(watchFetchTeamMateAsync),
    call(watchSendParticipantInvite),
    call(watchDeleteTeam),
  ]);
}


function* createTeamNameAsync({ payload, history }) {
  try {
    const token = yield select(selectToken);
    const { eventId } = payload;
    const { data } = yield axiosWithAuth(token).post(
      `/api/events/${eventId}/participant-teams`,
      payload
    );

    if (data) {
      yield showSuccess(`😀 ${data.message}`);
      yield put(fetchTeams(eventId));
    }

    const teamBody = data.body;
    let teamId;
    teamBody.map(team => {
      teamId = team.id;
      return teamId;
    });

    yield put(fetchTeamId(teamId))

  } catch (error) {
    yield handleError(error, put, history);
  }
}

function* watchCreateTeamName() {
  yield takeLatest(ParticiPantTeamTypes.CREATE_TEAM_NAME, createTeamNameAsync);
}

function* fetchTeamAsync({ payload }) {
  try {
    const token = yield select(selectToken);
    const {
      data: { body }
    } = yield axiosWithAuth(token).get(
      `/api/events/${payload}/participant-teams`
    );
    yield put(setTeams(body));
  } catch (error) {
    yield handleError(error, put);
  }
}

function* watchFetchTeamAsync() {
  yield takeLatest(ParticiPantTeamTypes.FETCH_TEAMS, fetchTeamAsync);
}

function* fetchTeamMatesAsync({ payload, history }) {
  try {
    const token = yield select(selectToken);
    const {
      data: { body }
    } = yield axiosWithAuth(token).get(
      `/api/events/participant-teams/${payload}/members`
    );
    yield put(setTeamMates(body));
  } catch (error) {
    yield handleError(error, put, history);
  }
}

function* watchFetchTeamMateAsync() {
  yield takeLatest(ParticiPantTeamTypes.FETCH_TEAMMATES, fetchTeamMatesAsync);
}

function* addParticipantTeamMemberAsync({ payload, history }) {
  try {
    const { team_id, team_member, eventId } = payload;
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).post(
      `/api/events/participant-teams/${team_id}`,
      {
        team_member
      }
    );
    if (data) {
      yield showSuccess(`Added successfully`);
    }
    history.push(`/dashboard/event/${eventId}/participant-teams`);
  } catch (error) {
    yield handleError(error, put, history);
  }
}

function* watchAddParticipantTeamMember() {
  yield takeLatest(
    ParticiPantTeamTypes.ADD_PARTICIPANT_TEAM_MEMBER,
    addParticipantTeamMemberAsync
  );
}

function* sendParticipantInviteAsync({ payload, history }) {
  try {
    const { email, teamId, eventId } = payload;
    const token = yield select(selectToken);
    yield axiosWithAuth(token).post(`/api/events/participant-teams/invite/${teamId}`, { email });
    yield showSuccess(`invite sent successfully to ${email}`);
    history.push(`/dashboard/event/${eventId}/participant-teams`);
  } catch (error) {
    yield handleError(error, put, history);
  }
}

function* watchSendParticipantInvite() {
  yield takeLatest(
    ParticiPantTeamTypes.SEND_PARTICIPANT_INVITE,
    sendParticipantInviteAsync
  );
}


function* deleteTeamAsync({ payload }) {
  try {
    debugger;
    const token = yield select(selectToken);
    const { data } = yield axiosWithAuth(token).delete(`/api/events/participant-teams/${payload}`);
    yield showSuccess(`😲 ${data.message}`);
  } catch (error) {
    yield handleError(error, put);
  }
}

function* watchDeleteTeam() {
  yield takeLatest(ParticiPantTeamTypes.DELETE_TEAM, deleteTeamAsync);
}

