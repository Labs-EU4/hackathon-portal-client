import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
// import { useRouteMatch, Switch, Route } from "react-router-dom";

import {
  BodyContainer,
  StyledRowBody,
  HeaderContent,
  MapContainer,
  MapFormContainer
} from '../../assets/styles/templates/EventOnboarding';
import { 
  StyledRowHead, 
  StyledButton,
  StyledH4
} from '../../assets/styles/templates/UserEventsdashboard';
import EventCard from "../molecules/EventCard";

const EventOnboarding = ({ eventModalHandler }) => {
  // const [ isOpenEventClicked, setIsOpenEventClicked ] = React.useState(false);
  // let { path, url } = useRouteMatch();
  const events = useSelector(state => state.events.data);
  const { userId } = useSelector(state => state.currentUser);
  const globalEvents = events.filter(event => event.creator_id !== userId);
  const today = new Date().getTime();

  return (
    <BodyContainer>
      <HeaderContent id="open">
        <MapContainer>
          <MapFormContainer/>
        </MapContainer>
      </HeaderContent>
      {globalEvents.length !== 0 && (
        <>
          <StyledRowHead>
            <StyledSectionTitle>Open Hackathons</StyledSectionTitle>
            <StyledButton 
              anchor
              gap
              href="/#global"
              // onClick={() => setIsOpenEventClicked(false)}
            >Global Hackathons</StyledButton>  
          </StyledRowHead>
          <StyledRowBody spacing="start">
            {globalEvents.map(event => {
                const startTime = new Date(event.start_date).getTime();
                if(today <= startTime) {
                  return <EventCard key={event.id} event={event} {...{eventModalHandler}} />
                }
            })}
          </StyledRowBody> 
        </>
      )}
      <StyledRowHead>
        <StyledSectionTitle>Global Hackathons</StyledSectionTitle>
        <StyledButton
          anchor
          gap
          href="/#open"
        >Open Hackathons</StyledButton>
      </StyledRowHead>
      <StyledRowBody spacing="start" id="global">
        { globalEvents.length !== 0 ? (
            globalEvents.map(event => (
              <EventCard key={event.id} event={event} {...{eventModalHandler}} />
            ))
          ) : (
            <StyledH4>
              There are no global events available
            </StyledH4>
          )
        }
      </StyledRowBody> 
    </BodyContainer> 
  );
};

export default EventOnboarding;

const StyledSectionTitle = styled.h2`
  margin-right: 10px;
  padding: 8px 22px;
  border: 2px solid ${props => props.theme.color.primary.regular};
  border-left: none;
  border-bottom: none;

  ${({gap}) => gap === true && `margin-left: 10px;` }
`;




// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import UserHeader from "../organisms/UserHeader";
// import Nav from "../molecules/Nav";
// import { Footer } from "../organisms/index";
// import WideBody from "../atoms/WideBody";
// import BodyContainer from "../atoms/BodyContainer";
// import EventCard from "../molecules/EventCard";
// import { H3, H4 } from "../atoms/Heading";
// import { RowHead } from "../atoms/RowHead";
// import { RowBody } from "../atoms/RowBody";
// import Button from "../atoms/Button";
// import { useSelector } from "react-redux";



// export const BodyContainerColumn = styled(props => (
//   <BodyContainer {...props} />
// ))`
//   flex-direction: column;
//   justify-content: start;
// `;

// const EventOnboarding = () => {
//   const events = useSelector(state => state.events.data);
//   const { userId } = useSelector(state => state.currentUser);
//   const userEvents = events.filter(event => event.creator_id === userId);
//   const globalEvents = events.filter(event => event.creator_id !== userId);

//   return (
//     <div>
//       <UserHeader />
//       <WideBody>
//         <Nav />
//         <BodyContainerColumn>
//           <RowHead>
//             <H3>My hackathons</H3>
//             <Link to="/dashboard/new">
//               <Button color="green">Create New</Button>
//             </Link>
//           </RowHead>

//           <RowBody spacing="start">
//             {userEvents.length !== 0 ? (
//               userEvents.map(event => (
//                 <EventCard key={event.event_title} event={event} />
//               ))
//             ) : (
//               <H4>You have not created any events yet. Why wait?</H4>
//             )}
//           </RowBody>

//           <RowHead>
//             <H3>Global hackathons</H3>
//           </RowHead>

//           <RowBody spacing="start">
//             {globalEvents.map(event => (
//               <EventCard key={event.id} event={event} />
//             ))}
//           </RowBody>
//         </BodyContainerColumn>
//       </WideBody>
//       <Footer />
//     </div>
//   );
// };

// export default EventOnboarding;
