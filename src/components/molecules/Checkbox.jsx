import React from "react";
import { useField } from "formik";
import { CheckGroupN } from "../../assets/styles/atoms/CheckGroup";
import { Label } from "../../assets/styles/atoms/LabelStyling";
import { StyledCheckboxFieldN } from "../../assets/styles/molecules/CheckboxStyling";

function Checkbox({ label, ...props }) {
  const [field] = useField(props);

  return (
    <CheckGroupN>
      <StyledCheckboxFieldN
        id={props.value}
        type="checkbox"
        {...field}
        {...props}
      />
      <Label htmlFor={props.value}>{label}</Label>
    </CheckGroupN>
  );
}
export default Checkbox;
