import React from "react";
import BodyContainerO from "../../../assets/styles/atoms/BodyContainer";
import HeroImage from "../../atoms/HeroImage";
import Container from "../../../assets/styles/atoms/Container";
import { H1 } from "../../../assets/styles/atoms/Heading";
import { Paragraph } from "../../../assets/styles/atoms/Paragraph";
import { RowBody } from "../../../assets/styles/atoms/RowBody";
import WideBody from "../../../assets/styles/atoms/WideBody";
import { Header, Footer } from "../../organisms/index";
import Button from "../../atoms/Button";
import image from "../../../assets/images/Password-sent.png";

function ResetPasswordConfirmation() {
  return (
    <div>
      <Header />
      <WideBody>
        <BodyContainerO justify="center">
          <HeroImage src={image} alt="Password Sent" />
          <Container>
            <H1>Check your inbox</H1>
            <Paragraph>
              Please check your email inbox for directions on how to reset your
              password.
            </Paragraph>
            <RowBody>
              <Button anchor size="wide" to="/login">
                Return to Login page
              </Button>
            </RowBody>
          </Container>
        </BodyContainerO>
      </WideBody>
      <Footer />
    </div>
  );
}

export default ResetPasswordConfirmation;
