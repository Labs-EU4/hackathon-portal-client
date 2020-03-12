import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Input from "../../../assets/atoms/Input";
import WideBody from "../../../assets/atoms/WideBody";
import BodyContainer from "../../../assets/atoms/BodyContainer";
import HeroImage from "../../../assets/atoms/HeroImage";
import image from "../../../assets/imagesSignup.png";
import Container from "../../../assets/atoms/Container";
import { H1 } from "../../../assets/atoms/Heading";
import { Paragraph } from "../../../assets/atoms/Paragraph";
import { RowBody } from "../../../assets/atoms/RowBody";
import { Header, Footer } from "../../organisms/index";
import Button from "../../atoms/Button";
import { ErrorSpan } from "../../atoms/Span";
import { resetPassword } from "../../../store/user/actions";
import { useHistory } from "react-router-dom";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = values => {
    const { newPassword, newPasswordConfirm } = values;
    if (newPassword === newPasswordConfirm) {
      dispatch(resetPassword(newPassword, history));
    }
  };

  const schema = Yup.object().shape({
    newPassword: Yup.string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters long."),
    newPasswordConfirm: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Password confirm is required.")
  });

  return (
    <div>
      <Header />
      <WideBody>
        <BodyContainer justify="center">
          <HeroImage src={image} alt="Reset passowrd" />
          <Container>
            <H1>Change the password</H1>
            <Paragraph>
              Please enter new password and confirm it in the second input
              field.
            </Paragraph>
            <Formik
              initialValues={{ newPassword: "", newPasswordConfirm: "" }}
              onSubmit={handleSubmit}
              validationSchema={schema}
            >
              {({ errors, touched }) => (
                <Form>
                  <Input
                    display="wide"
                    id="newPassword"
                    type="password"
                    name="newPassword"
                    placeholder="Enter new password"
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                  <ErrorSpan>
                    <ErrorMessage name="newPassword" />
                  </ErrorSpan>
                  <Input
                    display="wide"
                    id="newPasswordConfirm"
                    type="password"
                    name="newPasswordConfirm"
                    placeholder="Confirm new password"
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                  <ErrorSpan>
                    <ErrorMessage name="newPasswordConfirm" />
                  </ErrorSpan>
                  <RowBody>
                    <Button type="submit" size="wide" color="blue">Change Password</Button>
                  </RowBody>
                </Form>
              )}
            </Formik>
          </Container>
        </BodyContainer>
      </WideBody>
      <Footer />
    </div>
  );
};

export default ResetPassword;
