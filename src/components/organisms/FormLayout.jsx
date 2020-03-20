import React from "react";
import { WideBody } from "../../assets/styles/atoms/WideBodyStyling";
import { BodyContainerN } from "../../assets/styles/atoms/BodyContainerStyling";
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
    <BodyContainerN justify="center">
      <HeroImage src={imageType} alt={imageText} />
      <Form
        ctaText={ctaText}
        formHeader={formHeader}
        formParagraph={formParagraph}
      />
    </BodyContainerN>
  </WideBody>
);

export default FormLayout;
