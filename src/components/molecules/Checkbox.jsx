import React from 'react';
import { useField } from "formik";
import styled from "styled-components";

import CheckGroup from '../../assets/styles/atoms/CheckGroupStyling';
import Label from "../../assets/styles/atoms/LabelStyling";




function Checkbox({ label, ...props }) {
  const [field] = useField(props);

  return (
    <CheckGroup>
      <StyledCheckboxField id={props.value} type="checkbox" {...field} {...props} />
      <Label htmlFor={props.value}>{label}</Label>
    </CheckGroup>
  );
}

export default Checkbox;