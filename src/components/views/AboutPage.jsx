import React from 'react';
import styled from 'styled-components';

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
                    <Logo size="5rem"/>
                    <HeroText>
                        Let's make your next hackathon a success!
                    </HeroText>
                </HeroContainer>
            </AboutHeaderContainer>
            <MainContent>
                <SectionTitle lineWidth="30%">Meet our team of superstars<hr/></SectionTitle>
                <TeamContainer>
                    {
                        teamMembers.map(star => {
                            return (
                                <StarCard/>
                            );
                        })
                    }
                </TeamContainer>
            </MainContent>
        </AboutContainer>
    );
};

export default AboutPage;

const AboutContainer = styled.div`
    width: 100%; height:100%;
    background-color: ${props => props.theme.color.white.bg};
    overflow-y: scroll;
    border: 3px solid ${props => props.theme.color.primary.regular};

    &::-webkit-scrollbar {
        height: 0; width: 0;
    }
`;

const AboutHeaderContainer = styled.div`
    ${props => props.theme.flex.columnCenter};
    width: 100%; height: 60vh;
    background-color: ${props => props.theme.color.primary.regular};
    clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%);
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%);
`;

const HeroContainer = styled.div`
    ${props => props.theme.flex.columnCenter};
    margin-top: -100px;
`;

const HeroText = styled.div`
    ${props => props.theme.shadow.text};
    ${props => props.theme.fontSize.h4};
    padding: 0 10px 10px;
    color: ${props => props.theme.color.white.regular};
`;

const MainContent = styled.div`
    position: relative;
    width: 90%; max-width: 1000px;
    background-color: ${props => props.theme.color.white.regular};
    margin: -100px auto;
    border-radius: 3px;
    z-index: 1;
`;

const SectionTitle = styled.h1`
    ${props => props.theme.flex.columnCenter};
    ${props => props.theme.fontSize.h4};
    margin-bottom: 15px; padding-top: 30px;
    text-transform: uppercase;

    & > hr {
        ${({ lineWidth }) => lineWidth ? `width: ${lineWidth};` : 'width: 20%'};
        height: 3px;
        background-color: ${props => props.theme.color.primary.regular};
    }
`;

    /* ${props => props.theme.flex.custom('flex-start', 'flex-start', 'row', 'wrap')}; */
const TeamContainer = styled.div`
    ${props => props.theme.shadow.box};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 98%;
    margin: 0 auto;
`;


const StarCard = props => {
    return (
        <StyledCard>

        </StyledCard>
    );
};

// export default StarCard;

const StyledCard = styled.div`
    height: 250px;
    border: 2px solid ${props => props.theme.color.primary.regular};
`;