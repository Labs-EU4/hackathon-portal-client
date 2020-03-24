import React from 'react';

import {
    ContainerRadio
} from "../../assets/styles/templates/AddTeammatesStyling";

const Radio = ({ label, value, type = "radio", ...radioProps }) => {
    return (
      <ContainerRadio>
        {label || value}
        <input type={type} {...radioProps} />
        <span></span>
      </ContainerRadio>
    );
};

export default Radio;