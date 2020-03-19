   import React from "react";
   import { RowBodyN } from "../../assets/styles/atoms/RowBody";
   import { ErrorSpanN } from "../../assets/styles/atoms/Span";
   import { ErrorMessage } from "formik";
   import Button from "../atoms/Button";
   import {LabelN} from "../../assets/styles/atoms/Label";
   import TextArea from "../atoms/TextArea";
   
const ProjectWriteup = () => {

    return (
        <>
   <RowBodyN justify="start">
                <LabelN htmlFor="project_writeups">Project Writeup</LabelN>
                <TextArea
                  wide
                  as="textarea"
                  type="text"
                  name="project_writeups"
                  id="project_writeups"
                />
                <ErrorSpanN>
                  <ErrorMessage name="project_writeups" />
                </ErrorSpanN>
              </RowBodyN>
              <RowBodyN>
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
              </RowBodyN>
              </>

    )
}

export default ProjectWriteup;