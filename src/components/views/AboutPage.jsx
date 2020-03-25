import React from 'react';
import { 
    AboutContainer, 
    AboutHeaderContainer, 
    HeroContainer, 
    HeroText, 
    MainContent, 
    SectionTitle, 
    TeamContainer, 
    StyledCard,
    Paragraph,
    FeaturesContainer,
    FeatureBox,
    FeatureTitle,
    FeatureDescription
} from "../../assets/styles/views/AboutPage"

import Logo from '../atoms/Logo';
import teamImg from '../../assets/images/team.png';
import correctImg from '../../assets/images/correct.png';
import transparencyImg from '../../assets/images/transparency.png';

const teamMembers = [
    {
        name: "Anthony Campbell",
        role: "Team Leader",
        about: "",
        imgUrl: "",
        gitHubHandle: "",
        linkednHandle: "",
        other: ""
    },
    {
        name: "",
        role: "",
        about: "",
        imgUrl: "",
        gitHubHandle: "",
        linkednHandle: "",
        other: ""
    },
    {
        name: "",
        role: "",
        about: "",
        imgUrl: "",
        gitHubHandle: "",
        linkednHandle: "",
        other: ""
    },
    {
        name: "",
        role: "",
        about: "",
        imgUrl: "",
        gitHubHandle: "",
        linkednHandle: "",
        other: ""
    },
    {
        name: "",
        role: "",
        about: "",
        imgUrl: "",
        gitHubHandle: "",
        linkednHandle: "",
        other: ""
    },
    {
        name: "",
        role: "",
        about: "",
        imgUrl: "",
        gitHubHandle: "",
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
                                <StarCard key={index}/>
                            );
                        })
                    }
                </TeamContainer>
            </MainContent>
        </AboutContainer>
    );
};

export default AboutPage;

const StarCard = props => {
    return (
        <StyledCard>

        </StyledCard>
    );
};
