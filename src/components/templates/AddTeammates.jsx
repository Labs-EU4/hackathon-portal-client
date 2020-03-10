import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { StyledWideBody, StyledCardWide } from '../../assets/styles/templates/AddTeammatesStyling';
import { H3 } from "../../assets/styles/atoms/HeadingStyling";
import { RowHead } from "../../assets/styles/atoms/RowHeadStyling";
import { Column } from "../../assets/styles/atoms/ColumnStyling";
import { addTeamMember, sendEventTeamInvite } from "../../store/events/actions";
import { JudgesSearchWidget, TeamRoleWidget, TeamInviteWidget } from "./widgets";

const AddTeammates = (
  // { id, setEventId, setIsEventModalOpen, setIsAddJudgeOpen }
) => {
  const selectedUserArr = useRef([]);
  const role = "judge";
  const dispatch = useDispatch();
  const [noneUser, setNoneUser] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  const selectedUsersHandler = async(addedUser) => {
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
    // setIsEventModalOpen(false);
    // setIsAddJudgeOpen(false);
    // setEventId(null);
  };

  const handleExit = () => {
    //!!See if it works, otherwise make changes
    history.back();
    // setIsEventModalOpen(true);
    // setIsAddJudgeOpen(false);
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
            <H3>Add Judge</H3>
          </RowHead>
          <JudgesSearchWidget 
            {...{selectedUsersHandler}}
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


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { Footer } from "../organisms/index";
// import UserHeader from "../organisms/UserHeader";
// import WideBody from "../atoms/WideBody";
// import { H3 } from "../atoms/Heading";
// import { RowHead } from "../atoms/RowHead";
// import { Column } from "../atoms/Column";
// import { CardWide } from "../atoms/Card";
// import { addTeamMember, sendEventTeamInvite } from "../../store/events/actions";
// import Nav from "../molecules/Nav";
// import { BodyContainerColumn } from "../styles/templates/AddTeammatesStyling";
// import { SearchWidget, TeamRoleWidget, TeamInviteWidget } from "./widgets";
// import { useHistory } from "react-router-dom";

// const AddTeammates = () => {
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [role, setRole] = useState("");
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const [noneUser, setNoneUser] = useState(null);
//   const history = useHistory();

//   const handleSubmit = () => {
//     const { email } = selectedUser;
//     const data = {
//       eventId: Number(id),
//       email,
//       role
//     };
//     dispatch(addTeamMember(data, history));
//   };

//   const sendInvite = () => {
//     const data = {
//       eventId: Number(id),
//       email: noneUser,
//       role
//     };
//     dispatch(sendEventTeamInvite(data, history));
//   };

//   return (
//     <div>
//       <UserHeader />
//       <WideBody>
//         <Nav />
//         <BodyContainerColumn>
//           <RowHead>
//             <H3>Add Teammates</H3>
//           </RowHead>
//           <Column>
//             <CardWide>
//               {
//                 !selectedUser ? (
//                   <SearchWidget
//                     setSelectedUser={setSelectedUser}
//                     setNoneUser={setNoneUser}
//                   />
//                 ) : (
//                     <TeamRoleWidget
//                       setRole={setRole}
//                       role={role}
//                       handleSubmit={handleSubmit}
//                     />
//                   )

//               }
//               {noneUser ? (
//                 <TeamInviteWidget noneUser={noneUser} sendInvite={sendInvite} />
//               ) : null}
//             </CardWide>
//           </Column>
//         </BodyContainerColumn>
//       </WideBody>
//       <Footer />
//     </div>
//   );
// };

// export default AddTeammates;
