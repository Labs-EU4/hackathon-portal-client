import React from 'react';

import {
    TagsCardWide,
    TagCard,
    UserContainer,
    Image,
    PHosted
} from ''

const HSTagsCard = ({

}) => {
    return (
        <TagsCardWide active={isSlideForm} menuOpen={isSideBarOpen}>
            <TagCard>
                <NormalSpan>Hosted by:</NormalSpan>
                <UserContainer>
                {organizer_profile_pic === null ? (
                    <Image src={userImg} alt="user_icon" />
                ) : (
                    organizer_profile_pic.map((mem, index) => {
                    let memberProfile;
                    memberProfile = JSON.parse(mem);
                    return (
                        <Image
                        key={index}
                        src={memberProfile.avatar}
                        alt="user_icon"
                        />
                    );
                    })
                )}
                <PHosted>{organizer_name || emailUser}</PHosted>
                </UserContainer>
            </TagCard>
            <TagCard>
                <NormalSpan>
                Location:
                <SpanContent>&nbsp;{location}</SpanContent>
                </NormalSpan>
                <NormalSpan>
                Status:
                <SpanContent>{isOpen ? " Open" : " Closed"}</SpanContent>
                </NormalSpan>
                <NormalSpan>
                Participation type:{" "}
                <SpanContent>{participation_type}</SpanContent>
                </NormalSpan>
                <NormalSpan style={{ marginBottom: "15px" }}>
                Participants:{" "}
                <SpanContent>{registeredPartcipants}</SpanContent>
                </NormalSpan>
                {!isTeamMember && isOpen ? (
                <Button
                    color={isRegistered ? "grey" : "green"}
                    {...{
                    onClick: individualParticipation 
                    ? handleRegistration 
                    : handleTeamRegistration
                    }}
                >{isRegistered ? `Unregister` : `Register`}</Button>
                ) : (
                !isOpen && <Button disabled>Registration Closed</Button>
                )}
            </TagCard>
            <TagCard>
                <NormalSpan>Event dates:</NormalSpan>
                {startMonth !== endMonth ? (
                <Paragraph center bold size="large">
                    {startMonth} {startDay} - {endMonth} {endDay}, {startYear}
                </Paragraph>
                ) : startDay === endDay ? (
                <Paragraph center bold size="large">
                    {startMonth} {startDay}, {startYear}
                </Paragraph>
                ) : (
                <Paragraph center bold size="large">
                    {startMonth} {startDay} - {endDay}, {startYear}
                </Paragraph>
                )}
                {/* Implement this feature using google calendar or other similar services */}
                {isOpen ? (
                <Button size="wide" color="primary-reverse">
                    Add to calendar
                </Button>
                ) : (
                <Button size="wide" disabled>
                    Add to calendar
                </Button>
                )}
            </TagCard>
            <ButtonsDashGroup>
                {isEventCreator && !isEnded && (
                <Button
                    link
                    color="blue"
                    uppercase
                    to={`/event/${id}/edit`}
                >Edit event</Button>
                )}
                {isEventCreator && !isEnded && (
                <Button
                    size="wide"
                    color="green"
                    uppercase
                    onClick={() => setIsAddJudgeOpen(true)}
                >Add Judges</Button>
                )}
                {isTeamLead && !isEnded && (
                <Button
                    size="wide"
                    color="green"
                    uppercase
                    onClick={() => setRegisterTeam(true)}
                >Add teamate</Button>
                )}
                {isRegistered && !isEnded && (
                <Button
                    size="wide"
                    color="green"
                    uppercase
                    onClick={() => setIsSubmitProjectOpen(true)}
                >Submit Project</Button>
                )}
                <Button
                size="wide"
                color="blue"
                uppercase
                onClick={() => setIsSubmissionsPageOpen(true)}
                >View submissions</Button>
            </ButtonsDashGroup>
        </TagsCardWide>
    );
};

export default HSTagsCard;