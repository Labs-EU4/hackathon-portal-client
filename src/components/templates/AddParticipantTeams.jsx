import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import {
  StyledWideBody,
  StyledCardWide
} from "../../assets/styles/templates/AddTeammatesStyling";
import { H3 } from "../../assets/styles/atoms/HeadingStyling";
import { RowHead } from "../../assets/styles/atoms/RowHeadStyling";
import { Column } from "../../assets/styles/atoms/ColumnStyling";
import { SearchUserWidget } from "./widgets/JudgesSearchWidget";
import { ParticipantInviteWidget } from "./widgets/ParticipantInviteWidget";

import { 
  addParticipantTeamMember, 
  sendParticipantInvite 
} from "../../store/participantTeams/actions";

const AddParticipantTeam = ({ eventId, teamId, setIsAddTeamMemberOpen }) => {
  const selectedUserArr = useRef([]);
  // const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  const [noneUser, setNoneUser] = useState(null);
  // const { eventId, teamId } = useParams();

  const selectedUsersHandler = async addedUser => {
    const newArray = [...selectedUserArr.current, addedUser];
    selectedUserArr.current = newArray;
  };

  const handleSubmit = () => {
    selectedUserArr.current.map(selectedUser => {
      const data = {
        team_id: teamId,
        team_member: selectedUser.id,
        eventId: eventId
      };
      return dispatch(addParticipantTeamMember(data, history));
    });
    setIsAddTeamMemberOpen(false);
    history.push(`/${currentPath}`);
  };

  const handleExit = () => setIsAddTeamMemberOpen(false);

  const sendInvite = () => {
    const data = {
      teamId,
      email: noneUser,
      eventId
    };
    dispatch(sendParticipantInvite(data, history))
  }

  return (
    <StyledWideBody>
        <Column>
          <StyledCardWide>
            <RowHead>
              <H3>Add Teammates</H3>
            </RowHead>
            {/* <SearchUserWidget 
              {...{setSelectedUser}}
              {...{selectedUser}}
              {...{setNoneUser}}
              {...{handleSubmit}}
              {...{handleExit}}
            /> */}
            <JudgesSearchWidget
              {...{ selectedUsersHandler }}
              {...{ selectedUserArr }}
              {...{ setNoneUser }}
              {...{ handleExit }}
              {...{ handleSubmit }}
            />
            {/* {!selectedUser ?  : <RoleWidget />} */}
            {noneUser && (
              <ParticipantInviteWidget 
                {...{noneUser}} 
                {...{sendInvite}} 
              />
            )}
          </StyledCardWide>
        </Column>
    </StyledWideBody>
  );
};

export default AddParticipantTeam;

// const StyledWideBody = styled(WideBody)`
//   position: absolute; top: 0; left: 0;
//   width: 100%;
//   background-color: rgba(0, 0, 0, .6);
//   z-index: 200;
// `;

// const AddParticipantTeam = ({ eventId, teamId, setIsAddTeamMemberOpen }) => {
//   const [selectedUser, setSelectedUser] = useState(null);
//   const dispatch = useDispatch();
//   const history = useHistory();
//   // const { eventId, teamId } = useParams();
//   const [noneUser, setNoneUser] = useState(null);

//   const handleSubmit = () => {
//     const data = {
//       team_id: teamId,
//       team_member: selectedUser.id,
//       eventId: eventId
//     };
//     dispatch(addParticipantTeamMember(data, history));
//   };

//   const handleExit = () => setIsAddTeamMemberOpen(false);

//   const sendInvite = () => {
//     const data = {
//       teamId,
//       email: noneUser,
//       eventId
//     };
//     dispatch(sendParticipantInvite(data, history))
//   }

//   return (
//     <StyledWideBody>
//         <Column>
//           <StyledCardWide>
//             <RowHead>
//               <H3>Add Teammates</H3>
//             </RowHead>
//             {/* <SearchUserWidget 
//               {...{setSelectedUser}}
//               {...{selectedUser}}
//               {...{setNoneUser}}
//               {...{handleSubmit}}
//               {...{handleExit}}
//             /> */}
//             <JudgesSearchWidget
//               {...{ selectedUsersHandler }}
//               {...{ selectedUserArr }}
//               {...{ setNoneUser }}
//               {...{ handleExit }}
//               {...{ handleSubmit }}
//             />
//             {/* {!selectedUser ?  : <RoleWidget />} */}
//             {noneUser && (
//               <ParticipantInviteWidget 
//                 {...{noneUser}} 
//                 {...{sendInvite}} 
//               />
//             )}
//           </StyledCardWide>
//         </Column>
//     </StyledWideBody>
//   );
// };


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";
// import { BodyContainerColumn } from "../styles/templates/AppParticipantTeams";
// import { Footer } from "../organisms";
// import UserHeader from "../organisms/UserHeader";
// import WideBody from "../atoms/WideBody";
// import { H3 } from "../atoms/Heading";
// import { RowHead } from "../atoms/RowHead";
// import { Column } from "../atoms/Column";
// import { CardWide } from "../atoms/Card";
// import Nav from "../molecules/Nav";
// import { SearchWidget, ParticipantRoleWidget, ParticipantInviteWidget } from "./widgets";
// import { addParticipantTeamMember, sendParticipantInvite } from "../../store/participantTeams/actions";

// const AddParticipantTeam = () => {
//   const [selectedUser, setSelectedUser] = useState(null);
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const { eventId, teamId } = useParams();
//   const [noneUser, setNoneUser] = useState(null);

//   const handleSubmit = () => {
//     const data = {
//       team_id: teamId,
//       team_member: selectedUser.id,
//       eventId: eventId
//     };
//     dispatch(addParticipantTeamMember(data, history));
//   };

//   const sendInvite = (props) => {
//     const data = {
//       teamId,
//       email: noneUser,
//       eventId
//     };
//     props.dispatch(sendParticipantInvite(data, history))
//   }

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
//                     <ParticipantRoleWidget
//                       selectedUser={selectedUser}
//                       handleSubmit={handleSubmit}
//                     />
//                   )

//               }
//               {noneUser ? <ParticipantInviteWidget noneUser={noneUser} sendInvite={sendInvite} /> : null}
//             </CardWide>
//           </Column>
//         </BodyContainerColumn>
//       </WideBody>
//       <Footer />
//     </div>
//   );
// };

// export default AddParticipantTeam;

