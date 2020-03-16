
import React from 'react';
import { StyledContentTitle } from "../../assets/styles/molecules/ContentTitleStyling"

const ContentTitle = ({ text, isSlideForm }) => {
    return (
        <StyledContentTitle active={isSlideForm}>
            <p>{text}</p>
        </StyledContentTitle>
    );
};

export default ContentTitle;
