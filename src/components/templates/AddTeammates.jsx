
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
import { addTeamMember, sendEventTeamInvite } from "../../store/events/actions";
import {
  JudgesSearchWidget,
  TeamRoleWidget,
  TeamInviteWidget
} from "./widgets";

const AddTeammates = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const [noneUser, setNoneUser] = useState(null);
  const history = useHistory();

  const handleSubmit = () => {
    const { email } = selectedUser;
    const data = {
      eventId: Number(id),
      email,
      role
    };
    dispatch(addTeamMember(data, history));
  };

  const sendInvite = () => {
    const data = {
      eventId: Number(id),
      email: noneUser,
      role
    };
    dispatch(sendEventTeamInvite(data, history));
  };

  return (
    <div>
      <UserHeader />
      <WideBody>
        <Nav />
        <BodyContainerColumn>
          <RowHead>
            <H3>Add Teammates</H3>
          </RowHead>
          <Column>
            <CardWide>
              {
                !selectedUser ? (
                  <SearchWidget
                    setSelectedUser={setSelectedUser}
                    setNoneUser={setNoneUser}
                  />
                ) : (
                    <TeamRoleWidget
                      setRole={setRole}
                      role={role}
                      handleSubmit={handleSubmit}
                    />
                  )

              }
              {noneUser ? (
                <TeamInviteWidget noneUser={noneUser} sendInvite={sendInvite} />
              ) : null}
            </CardWide>
          </Column>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default AddTeammates;
