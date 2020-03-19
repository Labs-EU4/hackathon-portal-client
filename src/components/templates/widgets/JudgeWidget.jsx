import React from 'react';

import {
    StyledJudgeWidget,
    UserAvatar,
    UserInfo
} from "../../assets/styles/templates/AddTeammatesStyling";

export const JudgeWidget = ({ user, selected, ...otherProps }) => {
    let memberProfile = JSON.parse(user.image_url);
  
    const selectedJudgeHandler = (e) => {
      e.currentTarget.classList.add('selected');
      // Add option to deselect user with conditional to check for that
      selected(user);
    }
  
    return (
      <StyledJudgeWidget 
        key={user.id} 
        // onClick={() => selected(user)} 
        onClick={selectedJudgeHandler} 
        {...otherProps}
      >
        <UserAvatar>
          {
            user.image_url !== null ? (
              <img src={memberProfile.avatar} alt={user.username}/>
            ) : (
              <img 
                src="https://media.giphy.com/media/g0QET2Iejaa4EQ0eBV/giphy.gif" alt="default-img" 
              />
            )
          }
        </UserAvatar>
        <UserInfo>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </UserInfo>
      </StyledJudgeWidget>
    );
};