import React from "react";

import image from "../../assets/images/Login.png";
import { UserOnboarding } from "../templates";

const LoginPage = () => {
  function showMap(position) {
    // Show a map centered at (position.coords.latitude, position.coords.longitude).
    let currentLocation;

    return (currentLocation = [
      position.coords.latitude,
      position.coords.longitude
    ]);
  }

  navigator.geolocation.getCurrentPosition(showMap);

  return (
    <UserOnboarding
      ctaText="Log In"
      imageType={image}
      imageText="Log In now!!"
      formHeader="Log into Portal"
      formParagraph="We missed you, you missed us now get back into action."
    />
  );
};

export default LoginPage;
