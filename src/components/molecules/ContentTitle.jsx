import React from 'react';
import styled from 'styled-components';

const ContentTitle = ({ text, isSlideForm }) => {
    return (
        <StyledContentTitle active={isSlideForm}>
        <p>{text}</p>
        </StyledContentTitle>
    );
};

export default ContentTitle;

const StyledContentTitle = styled.div`
    position: relative;
    width: 100%; height: 20px;
    border-bottom: 2px solid ${props => props.theme.color.grey.border};
    margin-bottom: 20px;

    p {
        display: flex; align-items: baseline;
        position: absolute; top: 100%;
        background-color: ${props => props.active ? 'transparent' : props.theme.color.grey.bg };
        padding: 5px 10px 5px 0;
        font-size: 2rem; font-weight: bold;
        text-transform: uppercase;
        transform: translateY(-45%);
    }
`;