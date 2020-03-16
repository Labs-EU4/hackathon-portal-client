import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { UL } from "../../assets/styles/atoms/DropDownStyling";
import { resetUser } from "../../store/user/actions";

export const Dropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogOut = () => {
    dispatch(resetUser(history));
  };
  return (
    <UL>
      <li>
        <Link to="/dashboard/profile/edit">Settings</Link>
      </li>
      <li>
        <span onClick={handleLogOut}>LogOut</span>
      </li>
    </UL>
  );
};
