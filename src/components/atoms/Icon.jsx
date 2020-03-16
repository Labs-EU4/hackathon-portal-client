import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Icon = ({ icon, onClick, ...props }) => {
  return (
    <StyledIcon icon={icon} onClick={onClick ? onClick : null} {...props} />
  );
};

export default Icon;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 2.3rem;
  color: ${props => props.theme.color.white};
`;
