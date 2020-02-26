import React from "react";
import { useField } from "formik";
import CheckGroup from '../atoms/CheckGroup';
import Label from "../atoms/Label";
import { StyledCheckboxField } from "../styles/molecules/CheckboxStyling"

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