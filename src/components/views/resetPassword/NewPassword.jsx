import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { WideBody } from "../../../assets/styles/atoms/WideBodyStyling";
import { BodyContainerN } from "../../../assets/styles/atoms/BodyContainerStyling";
import Container from "../../../assets/styles/atoms/ContainerStyling";
import { H1 } from "../../../assets/styles/atoms/HeadingStyling";
import { Paragraph } from "../../../assets/styles/atoms/ParagraphStyling";
import { RowBody } from "../../../assets/styles/atoms/RowBodyStyling";
import { ErrorSpan } from "../../../assets/styles/atoms/SpanStyling";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import { resetPassword } from "../../../store/user/actions";

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
      <WideBody>
        <BodyContainer justify="center">
          {/* <HeroImage src={image} alt="Reset passowrd" /> */}
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
    </div>
  );
};

export default ResetPassword;



// import React from "react";
// import { Formik, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import Input from "../../atoms/Input";
// import WideBody from "../../atoms/WideBody";
// import BodyContainer from "../../atoms/BodyContainer";
// import HeroImage from "../../atoms/HeroImage";
// import image from "../../../assets/images/Signup.png";
// import Container from "../../atoms/Container";
// import { H1 } from "../../atoms/Heading";
// import { Paragraph } from "../../atoms/Paragraph";
// import { RowBody } from "../../atoms/RowBody";
// import { Header, Footer } from "../../organisms/index";
// import Button from "../../atoms/Button";
// import { ErrorSpan } from "../../atoms/Span";
// import { resetPassword } from "../../../store/user/actions";
// import { useHistory } from "react-router-dom";

// const ResetPassword = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const handleSubmit = values => {
//     const { newPassword, newPasswordConfirm } = values;
//     if (newPassword === newPasswordConfirm) {
//       dispatch(resetPassword(newPassword, history));
//     }
//   };

//   const schema = Yup.object().shape({
//     newPassword: Yup.string()
//       .required("Password is required.")
//       .min(8, "Password must be at least 8 characters long."),
//     newPasswordConfirm: Yup.string()
//       .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
//       .required("Password confirm is required.")
//   });

//   return (
//     <div>
//       <Header />
//       <WideBody>
//         <BodyContainer justify="center">
//           <HeroImage src={image} alt="Reset passowrd" />
//           <Container>
//             <H1>Change the password</H1>
//             <Paragraph>
//               Please enter new password and confirm it in the second input
//               field.
//             </Paragraph>
//             <Formik
//               initialValues={{ newPassword: "", newPasswordConfirm: "" }}
//               onSubmit={handleSubmit}
//               validationSchema={schema}
//             >
//               {({ errors, touched }) => (
//                 <Form>
//                   <Input
//                     display="wide"
//                     id="newPassword"
//                     type="password"
//                     name="newPassword"
//                     placeholder="Enter new password"
//                   />
//                   {errors.name && touched.name ? (
//                     <div>{errors.name}</div>
//                   ) : null}
//                   <ErrorSpan>
//                     <ErrorMessage name="newPassword" />
//                   </ErrorSpan>
//                   <Input
//                     display="wide"
//                     id="newPasswordConfirm"
//                     type="password"
//                     name="newPasswordConfirm"
//                     placeholder="Confirm new password"
//                   />
//                   {errors.name && touched.name ? (
//                     <div>{errors.name}</div>
//                   ) : null}
//                   <ErrorSpan>
//                     <ErrorMessage name="newPasswordConfirm" />
//                   </ErrorSpan>
//                   <RowBody>
//                     <Button type="submit" size="wide" color="blue">Change Password</Button>
//                   </RowBody>
//                 </Form>
//               )}
//             </Formik>
//           </Container>
//         </BodyContainer>
//       </WideBody>
//       <Footer />
//     </div>
//   );
// };

// export default ResetPassword;
