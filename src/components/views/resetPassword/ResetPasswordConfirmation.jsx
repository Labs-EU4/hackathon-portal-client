import React from "react";

import { BodyContainerN } from "../../../assets/styles/atoms/BodyContainerStyling";
import Container from "../../../assets/styles/atoms/ContainerStyling";
import { H1 } from "../../../assets/styles/atoms/HeadingStyling";
import { Paragraph } from "../../../assets/styles/atoms/ParagraphStyling";
import { RowBody } from "../../../assets/styles/atoms/RowBodyStyling";
import { WideBody } from "../../../assets/styles/atoms/WideBodyStyling";
import Button from "../../atoms/Button";
import HeroImage from "../../atoms/HeroImage";
import image from "../../../assets/images/Password-sent.png";

function ResetPasswordConfirmation() {
  return (
    <WideBody>
      <BodyContainer justify="center">
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
      </BodyContainer>
    </WideBody>
  );
}

export default ResetPasswordConfirmation;