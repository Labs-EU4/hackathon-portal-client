import React from "react";
import { RowBody } from "../../assets/styles/atoms/RowBodyStyling";
import { ErrorSpan } from "../../assets/styles/atoms/SpanStyling";
import { ErrorMessage } from "formik";
import Button from "../atoms/Button";
import { Label } from "../../assets/styles/atoms/LabelStyling";
import TextArea from "../atoms/TextArea";

const ProjectWriteup = () => {
  return (
    <>
      <RowBody justify="start">
        <Label htmlFor="project_writeups">Project Writeup</Label>
        <TextArea
          wide
          as="textarea"
          type="text"
          name="project_writeups"
          id="project_writeups"
        />
        <ErrorSpan>
          <ErrorMessage name="project_writeups" />
        </ErrorSpan>
      </RowBody>
      <RowBody>
        <Button
          link
          color="grey"
          //!! CHANGE THIS INTO A DYNAMIC ROUTE BASED OR GO BACK IN HISTORY
          to="/dashboard"
          // to={pathname === "/" ? "/" : "/dashboard"}
          // onClick={() => setIsSubmitProjectOpen(false)}
        >
          Cancel
        </Button>
        <Button color="green" type="submit">
          Submit
        </Button>
      </RowBody>
    </>
  );
};

export default ProjectWriteup;
