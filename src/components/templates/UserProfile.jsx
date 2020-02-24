import React from "react";
import styled from "styled-components";

import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import { H2, H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import Icon from "../atoms/Icon";
// import profileImg from "../../assets/profile-image.png";
import { media } from "../index";
import Button from "../atoms/Button";
import { Paragraph } from "../atoms/Paragraph";
// import mailIcon from "../../assets/Icon-mail-24px.png";
import EventCard from "../molecules/EventCard";

import { useRegisteredEvents } from "../../hooks";
import Spinner from "../molecules/Spinner";

export default function UserProfile({ initialState }) {
  const [data, loading] = useRegisteredEvents();
  const events = data?.body || [];
  return (
    <WideBody>
      <BodyContainerColumn>
        <RowHead>
          <H3>Your Profile</H3>
        </RowHead>

        <ProfileCardWide>
          <ProfileCard>
            <ProfileHead>
              {
                initialState.image_url &&
                 <ImageProfile src={JSON.parse(initialState.image_url[0])?.avatar}/> 
              }
              <Buttona color="green" anchor to="/dashboard/profile/edit">
                Edit profile
              </Buttona>
            </ProfileHead>
            <Column>
              <H2 style={{ marginBottom: 0 }}>{initialState.fullname}</H2>
              <Paragraph style={{ color: "gray" }}>
                @{initialState.username}
              </Paragraph>
            </Column>
            <Row>
              <Paragraph>{initialState.bio}</Paragraph>
            </Row>
            <Row>
              <Paragraph style={{ color: "blue", marginLeft: "3px" }}>
                {initialState.email}
              </Paragraph>
            </Row>
          </ProfileCard>

          <HackathonCard>
            <RowHead>
              <H3>Hackathon(s) you registered for</H3>
            </RowHead>
            {loading ? (
              <Spinner />
            ) : (
                <RowBody spacing="start">
                  {events.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </RowBody>)}
          </HackathonCard>
        </ProfileCardWide>
      </BodyContainerColumn>
    </WideBody>
  );
}

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
`;

export const ProfileCardWide = styled(CardWide)`
  max-width: 80%;
  min-width: 60%;
  justify-self: center;

  @media ${media.tablet} {
    max-width: 100%;
  }
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HackathonCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const ImageProfile = styled.img`
  display: flex;
  width: 30%;
  border-radius: 50%;
`;

export const ProfileHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Separator = styled.hr`
  border-top: 0;
  border-bottom: 1px solid #c3cfd9;
  margin: 0 0 20px 0;
`;

export const StyledIcon = styled.div`
  width: 20px;
  height: 23px;
`;

export const Row = styled.div`
  display: flex;
`;

const Buttona = styled(Button)`
  height: 15%;
  align-self: flex-end;
`;