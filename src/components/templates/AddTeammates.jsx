import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer } from "../organisms/index";
import UserHeader from "../organisms/UserHeader";
import WideBody from "../../assets/styles/atoms/WideBody";
import { H3 } from "../../assets/styles/atoms/Heading";
import { RowHead } from "../../assets/styles/atoms/RowHead";
import { Column } from "../../assets/styles/atoms/Column";
import { CardWide } from "../../assets/styles/atoms/Card";
import { addTeamMember, sendEventTeamInvite } from "../../store/events/actions";
import Nav from "../molecules/Nav";
import { BodyContainerColumn } from "../../assets/styles/templates/AddTeammatesStyling";
import { SearchWidget, TeamRoleWidget, TeamInviteWidget } from "./widgets";
import { useHistory } from "react-router-dom";

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
