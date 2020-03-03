import React, { useState, useEffect } from "react";
import isEmail from "validator/lib/isEmail";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer } from "../organisms/index";
import UserHeader from "../organisms/UserHeader";
import WideBody from "../atoms/WideBody";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import { addTeamMember, sendEventTeamInvite } from "../../store/events/actions";
import Nav from "../molecules/Nav";
import { BodyContainerColumn } from "../styles/templates/AddTeammatesStyling";
import { SearchWidget, RoleWidget, InviteWidget } from "./widgets";

const AddTeammates = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [role] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const [noneUser, setNoneUser] = useState(null);

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
                    <RoleWidget
                      selectedUser={selectedUser}
                      handleSubmit={handleSubmit}
                    />
                  )

              }
              {noneUser ? (
                <InviteWidget noneUser={noneUser} sendInvite={sendInvite} />
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
