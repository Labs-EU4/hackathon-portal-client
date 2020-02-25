import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserProfileForm from "../templates/UserProfileForm";
import { fetchUserProfile } from "../../store/user/actions";

const UserProfileFormPage = ({ isProfileOpen, setIsProfileOpen }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.currentUser);
  const userDetails = useSelector(state => state.currentUser);
  useEffect(() => {
    dispatch(fetchUserProfile(userId));
  }, [dispatch, userId]);

  return (
    <>
      <UserProfileForm 
        initialState={userDetails}
        {...{isProfileOpen}} 
        {...{setIsProfileOpen}} 
      />
    </>
  );
};

export default UserProfileFormPage;
