import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { StyledWideBody, StyledCardWide } from '../../assets/styles/templates/AddTeammates';
import { H3 } from "../../assets/styles/atoms/Heading";
import { RowHead } from "../../assets/styles/atoms/RowHead";
import { Column } from "../../assets/styles/atoms/Column";
import { addTeamMember, sendEventTeamInvite } from "../../store/events/actions";
import { JudgesSearchWidget, TeamRoleWidget, TeamInviteWidget } from "./widgets";

const AddTeammates = ({ id, setEventId, setIsEventModalOpen, setIsAddJudgeOpen }) => {
  const selectedUserArr = useRef([]);
  const [role, setRole] = useState("judge");
  const dispatch = useDispatch();
  const [noneUser, setNoneUser] = useState(null);
  const history = useHistory();

  const selectedUsersHadler = async(addedUser) => {
    const newArray = [...selectedUserArr.current, addedUser];
    selectedUserArr.current = newArray;
  }

  const handleSubmit = () => {
    selectedUserArr.current.map(selectedUser => {
      const { email } = selectedUser;
      const data = {
        eventId: Number(id),
        email,
        role
      };
      return dispatch(addTeamMember(data, history));
    });
    setIsEventModalOpen(false);
    setIsAddJudgeOpen(false);
    setEventId(null);
  };

  const handleExit = () => {
    setIsEventModalOpen(true);
    setIsAddJudgeOpen(false);
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
    <StyledWideBody>
      <Column>
        <StyledCardWide>
          <RowHead>
            <H3>Add Teammates</H3>
          </RowHead>
          <JudgesSearchWidget 
            {...{selectedUsersHadler}}
            {...{selectedUserArr}}
            {...{setNoneUser}}
            {...{handleExit}}
            {...{handleSubmit}}
          />
          {noneUser && (
            <TeamInviteWidget 
              {...{noneUser}}
              {...{sendInvite}}
            />
          )}
        </StyledCardWide>
      </Column>
    </StyledWideBody>
  );
};

export default AddTeammates;

// return (
//   <div>
//     <UserHeader />
//     <WideBody>
//       <Nav />
//       <BodyContainerColumn>
//         <RowHead>
//           <H3>Add Teammates</H3>
//         </RowHead>
//         <Column>
//           <CardWide>
//             {
//               !selectedUser ? (
//                 <SearchWidget
//                   setSelectedUser={setSelectedUser}
//                   setNoneUser={setNoneUser}
//                 />
//               ) : (
//                   <TeamRoleWidget
//                     setRole={setRole}
//                     role={role}
//                     handleSubmit={handleSubmit}
//                   />
//                 )

//             }
//             {noneUser ? (
//               <TeamInviteWidget noneUser={noneUser} sendInvite={sendInvite} />
//             ) : null}
//           </CardWide>
//         </Column>
//       </BodyContainerColumn>
//     </WideBody>
//     <Footer />
//   </div>
// );
