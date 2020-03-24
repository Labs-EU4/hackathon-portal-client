import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  StyledWideBody,
  ButtonRowBody
} from "../../assets/styles/templates/UserProfileFormStyling";
import { H3 } from "../../assets/styles/atoms/HeadingStyling";
import { RowHead } from "../../assets/styles/atoms/RowHeadStyling";
import { RowBody } from "../../assets/styles/atoms/RowBodyStyling";
import { Label } from "../../assets/styles/atoms/LabelStyling";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import { updateUserProfile } from "../../store/user/actions";

const UserProfileForm = ({ initialState, isProfileOpen, setIsProfileOpen }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedImage, setSelectedImage] = useState(initialState?.image_url);

  const handleSubmit = (values, a) => {
    const formData = new FormData();
    formData.append("image_url", selectedImage);
    formData.append("bio", values.bio);
    formData.append("fullname", values.fullname);
    formData.append("email", values.email);
    formData.append("username", values.username);
    dispatch(updateUserProfile(formData, history));
    setIsProfileOpen(false);
  };

  const defaultState = {
    bio: initialState?.bio || "",
    fullname: initialState?.fullname || "",
    email: initialState?.email || "",
    username: initialState?.username || ""
  };

  const schema = Yup.object().shape({
    fullname: Yup.string().required("fullname is required"),
    email: Yup.string().required("email is required"),
    username: Yup.string().required("username is required"),
    bio: Yup.string().required("bio is required")
  });

  return (
    <StyledWideBody
      active={isProfileOpen}
      onMouseLeave={() => setIsProfileOpen(false)}
    >
      <Formik
        onSubmit={handleSubmit}
        initialValues={defaultState}
        validationSchema={schema}
        enableReinitialize
      >
        {({ errors, touched }) => (
          <Form>
            <RowHead center bold>
              <H3>Edit Profile</H3>
            </RowHead>
            <RowBody>
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                type="text"
                name="fullname"
                display="wide"
                placeholder="Full Name"
              />
            </RowBody>
            <RowBody>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                display="wide"
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <ErrorMessage name="username" />
            </RowBody>
            <RowBody>
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                display="wide"
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <ErrorMessage name="email" />
            </RowBody>
            <RowBody>
              <Label htmlFor="image">Profile Image</Label>
              <Input
                type="file"
                name="image_url"
                display="wide"
                placeholder="Profile picture"
                accept="image/*"
                onChange={e => setSelectedImage(e.target.files[0])}
              />
            </RowBody>
            <RowBody>
              <Label htmlFor="bio">Bio</Label>
              <TextArea wide tall as="textarea" name="bio" placeholder="bio" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <ErrorMessage name="bio" />
            </RowBody>
            <ButtonRowBody>
              <Button color="green" size="wide" type="submit">
                Save Changes
              </Button>
            </ButtonRowBody>
          </Form>
        )}
      </Formik>
    </StyledWideBody>
  );
};

export default UserProfileForm;
