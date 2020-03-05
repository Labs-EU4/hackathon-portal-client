import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { BodyContainerColumn } from '../../assets/styles/templates/AddParticipantTeams';
import WideBody from "../../assets/styles/atoms/WideBody";
import { H3 } from "../../assets/styles/atoms/Heading";
import { RowHead } from "../../assets/styles/atoms/RowHead";
import { Column } from "../../assets/styles/atoms/Column";
import { CardWide } from "../../assets/styles/atoms/Card";
import { SearchWidget, ParticipantRoleWidget, ParticipantInviteWidget } from "./widgets";
import { addParticipantTeamMember, sendParticipantInvite } from "../../store/participantTeams/actions";

const AddParticipantTeam = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { eventId, teamId } = useParams();
  const [noneUser, setNoneUser] = useState(null);
 
  // const handleSubmit = () => {
  //   const data = {
  //     team_id: teamId,
  //     team_member: selectedUser.id,
  //     eventId: eventId
  //   };
  //   dispatch(addParticipantTeamMember(data, history));
  // };

  const sendInvite = () => {
    const data = {
      teamId,
      email: noneUser,
      eventId
    };
    dispatch(sendParticipantInvite(data, history))
  }

  return (
    <WideBody>
      <BodyContainerColumn>
        <RowHead>
          <H3>Add Teammates</H3>
        </RowHead>
        <Column>
          <CardWide>
            <SearchWidget 
              {...{setSelectedUser}}
              {...{setNoneUser}}
            />
            {/* {!selectedUser ?  : <RoleWidget />} */}
            {noneUser && (
              <ParticipantInviteWidget 
                {...{noneUser}} 
                {...{sendInvite}} 
              />
            )}
          </CardWide>
        </Column>
      </BodyContainerColumn>
    </WideBody>
  );
};

export default AddParticipantTeam;

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

