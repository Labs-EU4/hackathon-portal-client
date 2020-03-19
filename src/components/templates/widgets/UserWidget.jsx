import React from "react";
import styled from 'styled-components';

export const UserWidget = ({ user, select, ...otherProps }) => {
  const StyledWidget = styled.div`
    margin-bottom: 10px;
    cursor: pointer;
  `;
  return (
    <StyledWidget key={user.id} onClick={() => select(user)} {...otherProps}>
      {user.email}
    </StyledWidget>
  );
};