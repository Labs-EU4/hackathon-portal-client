import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import queryString from "query-string";

import Container from "../../assets/styles/atoms/ContainerStyling";
import { H1 } from "../../assets/styles/atoms/HeadingStyling";
import { ErrorSpan } from "../../assets/styles/atoms/SpanStyling";
import { Label } from "../../assets/styles/atoms/LabelStyling";
import {
  StyledParagraph,
  StyledButton
} from "../../assets/styles/organisms/FormStyling";
import Input from "../atoms/Input";
import SocialMedia from "../molecules/SocialMedia";
import { register, login } from "../../store/user/actions";
import { socialAuthLoad, verifyEmail } from "../../store/user/actions";
import Spinner from "../molecules/Spinner";
const CustomForm = ({ ctaText, formHeader, formParagraph }) => {
  const dispatch = useDispatch();
  const { search, state } = useLocation();
  const { team, role, google, github, verified, ref } = queryString.parse(
    search
  );
  const { token } = useSelector(state => state.currentUser);

  useEffect(() => {
    if (google || github) {
      dispatch(socialAuthLoad());
    }
    if (verified) {
      dispatch(verifyEmail());
    }
  }, [google, github, verified, dispatch]);

  const handleSubmit = values => {
    const { email, password } = values;
    if (ctaText.toLowerCase() === "log in") {
      dispatch(login(email, password));
    } else {
      dispatch(register(email, password, role, team));
      toast.success(" 🚀 A moment while we record your details!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
    setSpinner(true);
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Please use a valid email address.")
      .required("Email address is required."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters long.")
      .max(50, "Password cannot be more than 50 characters long.")
  });

  const [spinner, setSpinner] = useState(false);
  if (token) {
    return <Redirect to={state?.from || ref || "/dashboard"} />;
  }

  return (
    <Container>
      <H1>{formHeader}</H1>
      <StyledParagraph>{formParagraph}</StyledParagraph>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ errors, touched }) => (
          <Form>
            <Label>Email</Label>
            <Input
              display="wide"
              type="text"
              name="email"
              placeholder="Email address"
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <ErrorSpan>
              <ErrorMessage name="email" />
            </ErrorSpan>
            <Label>Password</Label>
            <Input
              display="wide"
              type="password"
              name="password"
              placeholder="Password"
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <ErrorSpan>
              <ErrorMessage name="password" />
            </ErrorSpan>

            <StyledButton
              type="submit"
              size="wide"
              color="blue"
              // onClick={() => setSpinner(true)}
            >
              {ctaText}
            </StyledButton>
            {spinner === false ? null : (
              <>
                <Spinner />
                <span>Loading</span>
              </>
            )}
            {ctaText.toLowerCase() === "log in" && (
              <StyledAnchor to="/forgotpassword">Forgot password?</StyledAnchor>
            )}
          </Form>
        )}
      </Formik>

      <SocialMedia></SocialMedia>
    </Container>
  );
};

export default CustomForm;

const StyledAnchor = styled(Link)`
  display: block;
  margin: 20px 0 0 0;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: 500;
  color: ${props => props.theme.color.blue.regular};
  text-decoration: none;
  text-transform: none;
  text-align: center;

  &:hover {
    color: ${props => props.theme.color.blue.light};
  }
`;
