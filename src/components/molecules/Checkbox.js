import React from "react";
import { useField } from "formik";
import { CheckGroup } from '../../assets/styles/atoms/CheckGroup';
import { Label } from "../../assets/styles/atoms/Label";
import { StyledCheckboxFieldN } from "../../assets/styles/molecules/CheckboxStyling"

function Checkbox({ label, ...props }) {
  const [field] = useField(props);

  return (
    <CheckGroup>
      <StyledCheckboxFieldN id={props.value} type="checkbox" {...field} {...props} />
      <Label htmlFor={props.value}>{label}</Label>
    </CheckGroup>
  );
}

export default Checkbox;