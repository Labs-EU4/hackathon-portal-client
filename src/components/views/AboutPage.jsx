import React, { useState } from 'react';
import { 
    AboutContainer, 
    AboutHeaderContainer, 
    HeroContainer, 
    HeroText, 
    MainContent, 
    SectionTitle, 
    TeamContainer, 
    Paragraph,
    FeaturesContainer,
    FeatureBox,
    FeatureTitle,
    FeatureDescription,
    StyledCard,
    StarImg,
    StarInfo,
    StarHandles,
    StyledIcon
} from "../../assets/styles/views/AboutPage";

import Logo from '../atoms/Logo';
import teamImg from '../../assets/images/team.png';
import correctImg from '../../assets/images/correct.png';
import transparencyImg from '../../assets/images/transparency.png';

const teamMembers = [
    {
        fullName: "Anthony Campbell",
        role: "Team Lead",
        bio: "",
        imgUrl: "https://avatars3.githubusercontent.com/u/45029641?s=400&v=4",
        identifier: "",
        gitHubHandle: "https://github.com/AnthonyJCampbell",
        linkednHandle: "",
        other: ""
    },
    {
        fullName: "Abdel Idir",
        role: "FullStack Software Developer",
        bio: "",
        imgUrl: "https://avatars0.githubusercontent.com/u/53605229?s=460&v=4",
        identifier: "",
        gitHubHandle: "https://github.com/AbdelIdir",
        linkednHandle: "",
        other: ""
    },
    {
        fullName: "Karim Bertacche",
        role: "FullStack Software Developer",
        bio: "",
        imgUrl: "https://avatars3.githubusercontent.com/u/49835145?s=460&v=4",
        identifier: "",
        gitHubHandle: "https://github.com/KarimBertacche",
        linkednHandle: "",
        other: ""
    },
    {
        fullName: "John Afolabi",
        role: "FullStack Software Developer",
        bio: "",
        imgUrl: "https://avatars3.githubusercontent.com/u/19263499?s=460&v=4",
        identifier: "",
        gitHubHandle: "https://github.com/john-afolabi",
        linkednHandle: "",
        other: ""
    },
    {
        fullName: "Emma Andrews",
        role: "FullStack Software Developer",
        bio: "Our favourite grumpy, old lady 👵🏻",
        imgUrl: "https://media-exp1.licdn.com/dms/image/C5603AQFRpv9tGUnasQ/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=mN_NQjxyyVHRDkl0n-OpMoXj1qkYcuYGB5rQIPTBx7c",
        identifier: "",
        gitHubHandle: "https://github.com/ELAndrews",
        linkednHandle: "",
        other: ""
    },
    {
        fullName: "Ekanem David",
        role: "FullStack Software Developer",
        bio: "",
        imgUrl: "https://avatars2.githubusercontent.com/u/38921132?s=460&v=4",
        identifier: "",
        gitHubHandle: "https://github.com/dueka",
        linkednHandle: "",
        other: ""
    }
];

const AboutPage = () => {
    return (
        <AboutContainer>
            <AboutHeaderContainer>
                <HeroContainer>
                    <Logo size="80%"/>
                    <HeroText>
                        Let's make your next hackathon a success!
                    </HeroText>
                </HeroContainer>
            </AboutHeaderContainer>
            <MainContent>
                <SectionTitle lineWidth="30%">Why HackHunt?<hr/></SectionTitle>
                <Paragraph>We have great features that will make participating to hackathons fun again</Paragraph>
                <FeaturesContainer>
                    <FeatureBox>
                        <img src={transparencyImg} alt="transparency" />
                        <FeatureTitle>Transparency</FeatureTitle>
                        <FeatureDescription>
                            We make it easy for participants to view their project scores in real time
                        </FeatureDescription>
                    </FeatureBox>
                    <FeatureBox>
                        <img src={teamImg} alt="team-collaboration" />
                        <FeatureTitle>Collaboration</FeatureTitle>
                        <FeatureDescription>
                            Work with your teammates as an organizer or participant
                        </FeatureDescription>
                    </FeatureBox>
                    <FeatureBox>
                        <img src={correctImg} alt="simplicity" />
                        <FeatureTitle>Simplicity</FeatureTitle>
                        <FeatureDescription>
                            This hackathon app was designed with you in mind. The UI is simple and intuitive
                        </FeatureDescription>
                    </FeatureBox>
                </FeaturesContainer>

                <SectionTitle lineWidth="30%">Meet our team of superstars<hr/></SectionTitle>
                <TeamContainer>
                    {
                        teamMembers.map((star, index) => {
                            return (
                                <StarCard 
                                    key={index} 
                                    {...{star}} 
                                />
                            );
                        })
                    }
                </TeamContainer>
            </MainContent>
        </AboutContainer>
    );
};

export default AboutPage;

const StarCard = ({ star }) => {
    const { 
        imgUrl, 
        identifier, 
        bio,
        fullName,
        role,
        gitHubHandle,
        linkednHandle
    } = star;
    const [ showInfo, setShowInfo ] = useState(false);
    return (
        <StyledCard
            onMouseOver={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
        >
            <StarImg src={imgUrl} alt={identifier} />
            <StarHandles
                active={showInfo}
            >
                <a href={gitHubHandle} target="_blank"><StyledIcon icon={['fab', 'github']} /></a>
                <a href={linkednHandle} target="_blank"><StyledIcon icon={['fab', 'linkedin']} /></a>
            </StarHandles>
            <StarInfo active={showInfo}>
                <h2>{fullName}</h2>
                <p className="role">{role}</p>
                <p className="bio">{bio}</p>
            </StarInfo>
        </StyledCard>
    );
};


