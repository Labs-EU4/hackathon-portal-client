import React, {useState} from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import WideBody from "../atoms/WideBody";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { CardWide } from "../atoms/Card";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import { media } from '../../assets/styles/variables/media';

import {
  updateUserProfile
} from "../../store/user/actions";
import { IconLetter } from "../atoms/IconLetter";

const NewLabel = styled(Label)`
  padding-left: 3px;
  @media ${media.tablet} {
    display: none;
  }
  @media ${media.mobile} {
    display: none;
  }
`;
const CardWider = styled(CardWide)`
  margin-left: 150px;
  @media ${media.tablet} {
    margin-left: 0px;
  }
  @media ${media.mobile} {
    margin-left: 0px;
  }
`;
const ButtonRowBody = styled(RowBody)`
@media ${media.tablet} {
  justify-content: space-around;
}
`
const NewButton = styled(Button)`
@media ${media.tablet} {
  width: 25%;
}
@media ${media.mobile} {
  width: 50%
}
`

const UserProfileForm = ({ initialState, isProfileOpen, setIsProfileOpen }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedImage, setSelectedImage] = useState(initialState?.image_url);

  const handleSubmit = (values, a) => {
    const formData = new FormData();
    formData.append('image_url', selectedImage);
    formData.append('bio', values.bio);
    formData.append('fullname', values.fullname);
    formData.append('email', values.email);
    formData.append('username', values.username);
    dispatch(updateUserProfile(formData, history));
    setIsProfileOpen(false);
  };

  const defaultState = {
    bio: initialState?.bio || "",
    fullname: initialState?.fullname || "",
    email: initialState?.email || "",
    username: initialState?.username || ""
  }

  const schema = Yup.object().shape({
    fullname: Yup.string().required("fullname is required"),
    email: Yup.string().required("email is required"),
    username: Yup.string().required("username is required"),
    bio: Yup.string()
  });

  return (
    <StyledWideBody active={isProfileOpen}>
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
              {errors.name && touched.name ? (
                <div>{errors.name}</div>
              ) : null}
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
              {errors.name && touched.name ? (
                <div>{errors.name}</div>
              ) : null}
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
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
            </RowBody>
            <RowBody>
              <Label htmlFor="bio">Bio</Label>
              <TextArea
                wide
                tall
                as="textarea"
                name="bio"
                placeholder="bio"
              />
              {errors.name && touched.name ? (
                <div>{errors.name}</div>
              ) : null}
              <ErrorMessage name="bio" />
            </RowBody>
            <ButtonRowBody>
              {/* <Link to="/dashboard">
                <Button to="/dashboard" color="grey">
                  Cancel
                </Button>
              </Link> */}
              <NewButton 
                color="green" 
                size="wide"
                type="submit"
              >Save Changes</NewButton>
            </ButtonRowBody>
          </Form>
        )}
      </Formik>
    </StyledWideBody>
  );
};

export default UserProfileForm;


const StyledWideBody = styled(WideBody)`
  ${props => props.theme.shadow.box};
  position: absolute; top: 0; right: 0;
  width: 300px; height: 100%;
  background-color: ${props => props.theme.color.white.bg};
  border: 2px solid  ${props => props.theme.color.primary.regular};
  border-right: none;
  transform: ${props => !props.active &&'translateX(100%)'};
  transition: transform 1s ease;
  padding: 20px;
`;
