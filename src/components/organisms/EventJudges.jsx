import React from 'react';

import {
    JudgesContainer,
    JudgeCard,
    JudgeImg,
    JudgeInfo,
    NoJudgesParagraph,
    JudgeIcon
} from '../../assets/styles/templates/HackathonSingleStyling';

const EventJudges = ({
    team,

}) => {
    return (
        <JudgesContainer>
            {team.length === 0 ? (
            <NoJudgesParagraph>
                No Judges have been selected for this event
            </NoJudgesParagraph>
            ) : (
            team.map(member => (
                <JudgeCard key={member.user_id}>
                {member.image_url === null ? (
                    <JudgeIcon
                        icon="user-circle"
                    />
                ) : (
                    member.image_url.map((mem, index) => {
                    let memberProfile;
                    memberProfile = JSON.parse(mem);
                    return (
                        <JudgeImg
                        key={index}
                        alt="team member profile pic"
                        src={memberProfile.avatar}
                        />
                    );
                    })
                )}
                <JudgeInfo>
                    <p>{member.fullname}</p>
                </JudgeInfo>
                </JudgeCard>
            ))
            )}
        </JudgesContainer>
    );
};

export default EventJudges;