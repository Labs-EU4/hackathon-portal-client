import React from "react";
import { useDispatch } from 'react-redux';
// import { Dropdown, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../assets/styles/variables/media";
import { resetUser } from '../../store/user/actions';



const StyledButton = styled.button`
 
  padding: 2px 5px;
  margin: 0;
  border-radius: 6px;
  font-size: 15px;
  color: ${props => props.theme.color.white.regular};
  background: ${props => props.theme.color.blue.regular};
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }

  @media ${media.tablet} {
    padding: 12px;
  }

  @media ${media.mobile} {
    padding: 10px;
  }
`;

export const UserHeaderDropDown = () => {
  const dispatch = useDispatch()
  const handleLogOut = ()=> dispatch(resetUser())
  const options = [
    {
      key: 1,
      text: "Edit Profile",
      value: 1,
      icon: "edit",
      as: Link,
      to: "/dashboard/profile/edit"
    },
    {
      key: 2,
      text: "Logout",
      value: 2,
      icon: "logout",
      onClick: handleLogOut
    }
  ];

return (
//   <Menu compact>
    <StyledButton>
      <Dropdown
        text="Profile"
        options={options}
        simple
        item
        style={{ padding: "10px 20px" }}
      />
    </StyledButton>
   /* </Menu> */
)};
