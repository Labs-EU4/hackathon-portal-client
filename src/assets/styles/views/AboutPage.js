import styled from 'styled-components';

import Icon from '../../../components/atoms/Icon';

export const AboutContainer = styled.div`
    width: 100%; height:100%;
    /* background-color: ${props => props.theme.color.white.bg}; */
    background-color: transparent;
    overflow-y: scroll;
    /* border: 3px solid ${props => props.theme.color.primary.regular}; */
    &::-webkit-scrollbar {
        height: 0; width: 0;
    }
`;

export const AboutHeaderContainer = styled.div`
    ${props => props.theme.flex.columnCenter};
    width: 100%; height: 60vh;
    background-color: rgba(0, 255, 70, .8);
    clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%);
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%);
`;

export const HeroContainer = styled.div`
    ${props => props.theme.flex.columnCenter};
    margin-top: -100px;
`;

export const HeroText = styled.div`
    ${props => props.theme.shadow.text};
    padding: 5px 10px 10px;
    font-size: 24px;
    color: ${props => props.theme.color.white.regular};
`;

export const MainContent = styled.div`
    ${props => props.theme.shadow.box};
    position: relative;
    width: 95%; max-width: 1000px;
    background-color: ${props => props.theme.color.black.regular};
    margin: -100px auto;
    padding: 24px;
    border-radius: 3px;
    z-index: 1;
`;

export const SectionTitle = styled.h1`
    ${props => props.theme.flex.columnCenter};
    margin-bottom: 15px; padding-top: 30px;
    text-transform: uppercase; text-align: center;
    font-size: 25px;
    color: ${props => props.theme.color.primary.regular};

    & > hr {
        ${({ lineWidth }) => lineWidth ? `width: ${lineWidth};` : 'width: 20%'};
        height: 3px;
        background-color: ${props => props.theme.color.primary.regular};
    }
`;

export const TeamContainer = styled.div`
    ${({theme}) => theme.flex.custom('space-evenly', 'flex-start', 'row', 'wrap')};
    margin: 0 auto 50px;
`;

export const StyledParagraph = styled.p`
    width: 100%;
    margin-top: -10px;
    text-align: center;
    font-size: 19px; letter-spacing: 1px;
    color: ${props => props.theme.color.white.regular};
`;

export const FeaturesContainer = styled.div`
    ${({theme}) => theme.flex.custom('space-around', 'flex-start', 'row', 'wrap')};
    margin: 30px auto 0;
`;

export const FeatureBox = styled.div`
    ${({theme}) => theme.flex.custom('flex-start', 'center', 'column')};
    width: calc((100% / 3) - 10px); min-width: 200px;
    height: 300px;

    & > img {
        width: 50%; min-width: 100px;
        object-fit: cover;
    }
`;

export const FeatureTitle = styled.h2`
    margin-top: 5px;
    font-size: 20px; letter-spacing: 2px;
    font-weight: bolder;
    color: ${props => props.theme.color.primary.regular};
`;

export const FeatureDescription = styled.p`
    margin-top: 20px;
    text-align: center;
    font-weight: bold; font-size: 14px;
    letter-spacing: 1.2px; line-height: 1.4;
    color: ${props => props.theme.color.white.regular};
`;

export const StyledCard = styled.div`
    position: relative;
    width: calc((100% / 3) - 10px); min-width: 250px;
    height: 250px;
    background-color: black;
    border: 2px solid ${({ theme }) => theme.color.primary.regular};
    margin: 5px 2.5px;
    overflow: hidden;
    transition: all .2s ease-in;

    &:hover {
        ${props => props.theme.shadow.box};
        transform: scale(1.1);
        z-index: 20;

        & > img {
            width: 50%; height: 50%;
            filter: grayscale(0%);
        }
    }
`;

export const StarImg = styled.img`
    width: 100%; height: 100%;
    object-fit: cover;
    /* opacity: .9; */
    filter: grayscale(90%);
    transition: all .4s ease-in-out;
`;

export const StarInfo = styled.div`
    ${({ theme }) => theme.flex.columnCenter};
    height: 50%;
    background-color: black;
    color: ${({ theme }) => theme.color.primary.regular};
    transform: ${({ active }) => active 
        ? `translateY(0)`
        : `translateY(100%)`
    };
    transition: all .4s ease-in-out;

    & > h2 {
        margin: -25px auto 0;
        font-size: 20px;
        text-transform: uppercase;
    }

    .role {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.color.white.regular};
    }

    .bio {
        margin-top: 10px;
        font-size: 16px;
        text-align: center;
    }
`;

export const StarHandles = styled.div`
    position: absolute; top: 0; left: 50%;
    ${({ theme }) => theme.flex.custom('space-evenly', 'center')};
    width: 50%; height: 50%;
    transform: ${({ active }) => active 
        ? `translateX(0)`
        : `translateX(100%)`
    };
    transition: all .4s ease-in-out;
`;

export const StyledIcon = styled(Icon)`
    color: ${({ theme }) => theme.color.primary.regular};
    font-size: 40px;
    transition: all .2s ease-in;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.color.primary.regular};
        filter: drop-shadow(
            2px 2px 10px rgb(0, 0, 0), 
            -.25px -.25px 10px rgb(0, 0, 0)
        );
        transform: scale(1.2);
    }
`;