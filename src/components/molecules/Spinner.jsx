import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { RowBody } from '../../assets/styles/atoms/RowBodyStyling';

export default () => (
  <RowBody spacing='center'>
    <Loader
      type="Puff"
      color="#2559a1"
      height={100}
      width={100}
      visible={true}
    />
  </RowBody>
);