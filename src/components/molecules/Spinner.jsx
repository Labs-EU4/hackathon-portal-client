import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { RowBody } from "../../assets/styles/atoms/RowBodyStyling";

export default () => (
  <RowBody spacing="center">
    <Loader
      type="ThreeDots"
      color="#00ff46"
      height={10}
      width={100}
      visible={true}
    />
  </RowBody>
);
