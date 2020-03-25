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
    FeatureBox
} from "../../assets/styles/views/AboutPage"

import Logo from '../atoms/Logo';

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
                    <FeatureBox></FeatureBox>
                    <FeatureBox></FeatureBox>
                    <FeatureBox></FeatureBox>
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
