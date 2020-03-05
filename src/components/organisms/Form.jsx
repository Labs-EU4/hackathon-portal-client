import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import queryString from "query-string";

import Container from "../../assets/styles/atoms/Container";
import { H1 } from "../../assets/styles/atoms/Heading";
import { Paragraph } from "../../assets/styles/atoms/Paragraph";
import { ErrorSpan } from "../../assets/styles/atoms/Span";
import Label from '../../assets/styles/atoms/Label';
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import SocialMedia from "../molecules/SocialMedia";
import { register, login } from "../../store/user/actions";
import { socialAuthLoad, verifyEmail } from "../../store/user/actions";


const CustomForm = ({ ctaText, formHeader, formParagraph }) => {
  const dispatch = useDispatch();
  const { search, state } = useLocation();
  const { team, role, google, github, verified, ref } = queryString.parse(search);
  const { token } = useSelector(state => state.currentUser);
  
  useEffect(() => {
    if (google || github) {
      dispatch(socialAuthLoad());
    }
    if (verified) {
      dispatch(verifyEmail());
    }
  }, [google, github, verified, dispatch]);
  
  // const handleSubmit = values => {
  //   const fullname = `${values.firstName} ${values.lastName}`
  //   const {
  //     username,
  //     email, 
  //     password 
  //   } = values;
  //   if (ctaText.toLowerCase() === "log in") {
  //     dispatch(login(email, password));
  //     toast(" 🎉 Logging you in!", {
  //       position: toast.POSITION.TOP_RIGHT,
  //       className: 'green'
  //     });
  //   } else {
  //     dispatch(register(fullname, username, email, password, role, team));
  //     toast.success(" 🚀 A moment while we record your details!", {
  //       position: toast.POSITION.TOP_RIGHT
  //     });
  //   }
  // };

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
  };
  
  // const schema = ctaText.toLowerCase() === "log in" ? (
  //   Yup.object().shape({
  //     email: Yup.string()
  //     .email("Please use a valid email address.")
  //     .required("Email address is required."),
  //     password: Yup.string()
  //     .required("Password is required.")
  //     .min(8, "Password must be at least 8 characters long.")
  //   })
  // ) : (
  //   Yup.object().shape({
  //     firstName: Yup.string()
  //     .required("First name is required.")
  //     .min(2, "Your name should be at least 2 characters long."),
  //     lastName: Yup.string()
  //     .required("Last name is required.")
  //     .min(2, "Your surname should be at least 2 characters long."),
  //     username: Yup.string()
  //     .required("Please provide also a nickname for your profile.")
  //     .min(3, "Your username should be at least 3 characters long."),
  //     email: Yup.string()
  //     .email("Please use a valid email address.")
  //     .required("Email address is required."),
  //     password: Yup.string()
  //     .required("Password is required.")
  //     .min(8, "Password must be at least 8 characters long.")
  //   })
  // )

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Please use a valid email address.")
      .required("Email address is required."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters long.")
      .max(50, "Password cannot be more than 50 characters long.")
  });
  
  if (token) {
    return <Redirect to={state?.from || ref || '/dashboard'} />;
  }
  
  return (
    <Container>
      <H1>{formHeader}</H1>
      <Paragraph>{formParagraph}</Paragraph>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        >
        {({ errors, touched }) => (
          <Form>
            {/* {ctaText.toLowerCase() === "create my free account" && (
              <>
                <Label>First name</Label>
                <Input
                  display="wide"
                  type="text"
                  name="firstName"
                  placeholder="Bruce"
                />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <ErrorSpan>
                  <ErrorMessage name="firstName" />
                </ErrorSpan>
                <Label>Last name</Label>
                <Input
                  display="wide"
                  type="text"
                  name="lastName"
                  placeholder="Wayne"
                />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <ErrorSpan>
                  <ErrorMessage name="lastName" />
                </ErrorSpan>
                <Label>Username</Label>
                <Input
                  display="wide"
                  type="text"
                  name="username"
                  placeholder="Email address"
                />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <ErrorSpan>
                  <ErrorMessage name="username" />
                </ErrorSpan>
              </>
            )} */}
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

            <Button type="submit" size="wide" color="blue">
              {ctaText}
            </Button>
              {ctaText.toLowerCase() === "log in" && (
                <StyledAnchor to="/forgotpassword">
                  Forgot password?
                </StyledAnchor>
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
  font-size: ${props => props.theme.fontSize.small}; font-weight: 500; 
  color: ${props => props.theme.color.blue.regular};
  text-decoration: none; text-transform: none; text-align: center;

  &:hover {
    color: ${props => props.theme.color.blue.light};
  }
`;


//OLD VERSION
// const CustomForm = ({ ctaText, formHeader, formParagraph }) => {
//   const dispatch = useDispatch();
//   const { search, state } = useLocation();
//   const { team, role, google, github, verified, ref } = queryString.parse(search);
//   const { token } = useSelector(state => state.currentUser);

//   useEffect(() => {
//     if (google || github) {
//       dispatch(socialAuthLoad());
//     }
//     if (verified) {
//       dispatch(verifyEmail());
//     }
//   }, [google, github, verified, dispatch]);

//   const handleSubmit = values => {
//     const { email, password } = values;
//     if (ctaText.toLowerCase() === "log in") {
//       dispatch(login(email, password));
//     } else {
//       dispatch(register(email, password, role, team));
//       toast.success(" 🚀 A moment while we record your details!", {
//         position: toast.POSITION.BOTTOM_RIGHT
//       });
//     }
//   };

//   const schema = Yup.object().shape({
//     email: Yup.string()
//       .email("Please use a valid email address.")
//       .required("Email address is required."),
//     password: Yup.string()
//       .required("Password is required.")
//       .min(8, "Password must be at least 8 characters long.")
//       .max(50, "Password cannot be more than 50 characters long.")
//   });

//   if (token) {
//     return <Redirect to={state ?.from || ref || '/dashboard'} />;
//   }

//   return (
//     <Container>
//       <H1>{formHeader}</H1>

//       <Paragraph>{formParagraph}</Paragraph>
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         onSubmit={handleSubmit}
//         validationSchema={schema}
//       >
//         {({ errors, touched }) => (
//           <Form>
//             <Input
//               display="wide"
//               type="text"
//               name="email"
//               placeholder="Email address"
//             />
//             {errors.name && touched.name ? <div>{errors.name}</div> : null}
//             <ErrorSpan>
//               <ErrorMessage name="email" />
//             </ErrorSpan>
//             <Input
//               display="wide"
//               type="password"
//               name="password"
//               placeholder="Password"
//             />
//             {errors.name && touched.name ? <div>{errors.name}</div> : null}
//             <ErrorSpan>
//               <ErrorMessage name="password" />
//             </ErrorSpan>

//             <Button type="submit" size="wide" color="blue">
//               {ctaText}
//             </Button>
//             {ctaText.toLowerCase() === "log in" && (
//               <StyledAnchor to="/forgotpassword">
//                 Forgot password?
//                 </StyledAnchor>
//             )}
//           </Form>
//         )}
//       </Formik>

//       <SocialMedia></SocialMedia>
//     </Container>
//   );
// };

// export default CustomForm;
