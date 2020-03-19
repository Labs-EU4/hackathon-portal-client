import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import Button from "../atoms/Button";
import { RowBody } from "../../assets/styles/atoms/RowBodyStyling";
import { useSearchUserByEmail } from "../../hooks";


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