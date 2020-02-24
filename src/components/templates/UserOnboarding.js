import React from "react";
import { FormLayout, Header, Footer } from "../organisms/index";

const UserOnboarding = ({
  ctaText,
  imageType,
  imageText,
  formHeader,
  formParagraph
}) => {
  return (
    <div>
      <FormLayout
        ctaText={ctaText}
        imageType={imageType}
        imageText={imageText}
        formHeader={formHeader}
        formParagraph={formParagraph}
      />
    </div>
  );
};

export default UserOnboarding;
