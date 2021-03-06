import React from "react";
import { WideBody } from "../../assets/styles/atoms/WideBodyStyling";
import { BodyContainer } from "../../assets/styles/atoms/BodyContainerStyling";
import HeroImage from "../atoms/HeroImage";
import Form from "./Form";

const FormLayout = ({
  ctaText,
  imageType,
  imageText,
  formHeader,
  formParagraph
}) => (
  <WideBody>
    <BodyContainer justify="center">
      <HeroImage src={imageType} alt={imageText} />
      <Form
        ctaText={ctaText}
        formHeader={formHeader}
        formParagraph={formParagraph}
      />
    </BodyContainer>
  </WideBody>
);

export default FormLayout;
