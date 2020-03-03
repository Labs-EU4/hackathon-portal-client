import React from 'react';
import styled from 'styled-components';

import Logo from '../atoms/Logo';

const AboutPage = () => {
    return (
        <AboutContainer>
            <AboutHeaderContainer>
                <StyledLogo />
                <HeaderContent>
                    Let's make your next hackathon a success!
                </HeaderContent>
            </AboutHeaderContainer>
            <MainContent>

            </MainContent>
        </AboutContainer>
    );
};

export default AboutPage;

const AboutContainer = styled.div`
    width: 100%; height:100%;
    overflow-y: scroll;
    border: 3px solid ${props => props.theme.color.primary.regular};
`;

const AboutHeaderContainer = styled.div`
    ${props => props.theme.flex.columnCenter};
    width: 100%; height: 60vh;
    background-color: ${props => props.theme.color.primary.regular};
    clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%);
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%);
`;

const StyledLogo = styled(Logo)`
    ${props => props.theme.shadow.filter};
    margin-top: -100px; margin-left: -10px;
    width: 30%; height: 80px;
`;

const HeaderContent = styled.div`
    ${props => props.theme.shadow.text};
    ${props => props.theme.fontSize.h4};
    padding: 10px;
    color: ${props => props.theme.color.blue.regular};
`;

const MainContent = styled.div`
    position: relative;
    width: 90%;
    margin: -100px auto;
    border: 3px solid blue;
    z-index: 1;
`;