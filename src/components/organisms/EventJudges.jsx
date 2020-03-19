import React from 'react';

import {
    JudgesContainer,
    JudgeCard,
    JudgeImg,
    JudgeInfo
} from '../../assets/styles/templates/HackathonSingleStyling';
import { Paragraph } from "../../assets/styles/atoms/ParagraphStyling";

const EventJudges = () => {
    return (
        <JudgesContainer>
            {team.length === 0 ? (
            <Paragraph>
                No Judges have been selected for this event
            </Paragraph>
            ) : (
            team.map(member => (
                <JudgeCard key={member.user_id}>
                {member.image_url === null ? (
                    <JudgeImg
                    alt="team member profile pic"
                    src={userImg}
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