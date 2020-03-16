import React from "react";
import { useField } from "formik";
import { CheckGroupN } from '../../assets/styles/atoms/CheckGroup';
import { LabelN } from "../../assets/styles/atoms/Label";
import { StyledCheckboxFieldN } from "../../assets/styles/molecules/CheckboxStyling"

function Checkbox({ label, ...props }) {
  const [field] = useField(props);

  return (
    <CheckGroupN>
      <StyledCheckboxFieldN id={props.value} type="checkbox" {...field} {...props} />
      <LabelN htmlFor={props.value}>{label}</LabelN>
    </CheckGroupN>
  );
}
export default Checkbox;