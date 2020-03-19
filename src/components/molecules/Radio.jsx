import React from 'react';

const Radio = ({ label, value, type = "radio", ...radioProps }) => {
    return (
      <ContainerRadio>
        {label || value}
        <input type={type} {...radioProps} />
        <span></span>
      </ContainerRadio>
    );
};