import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { Column } from "../atoms/Column";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Checkbox from "../atoms/Checkbox";
import TextArea from "../atoms/TextArea";
import Select from "../atoms/Select";
import Button from "../atoms/Button";
import { Paragraph } from "../atoms/Paragraph";
import { ErrorSpan } from "../atoms/Span";
import InputTag from "../atoms/TagsInput.js";

import {
  createEvent,
  fetchEventCategories,
  updateEvent
} from "../../store/events/actions";

import { format } from '../../utils/date';

const HackathonForm = ({ initialState }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { categories } = useSelector(state => state.events);
  useEffect(() => {
    dispatch(fetchEventCategories());
  }, [dispatch]);

  const defaultState = {
    id: initialState?.id,
    event_title: initialState?.event_title || "",
    start_date: initialState?.start_date || "",
    end_date: initialState?.end_date || "",
    event_description: initialState?.event_description || "",
    location: initialState?.location || "",
    tag_name: initialState?.tag_name || [],
    rubrics: initialState?.rubrics || [],
    requirements: initialState?.requirements || [],
    guidelines: initialState?.guidelines || "",
    participation_type: initialState?.participation_type || "individual",
    category_id: initialState?.category_id || 1
  };


  const handleSubmit = values => {
    const participationTypeValue = document.getElementById("participation_type").value;
    const categoryIdValue = document.getElementById("event_category").value;
    values.participation_type = participationTypeValue;
    values.category_id = categoryIdValue;
    let tagss = JSON.parse(window.localStorage.getItem("tags"));
    if (values.title !== "" && !values.id) {
      values.tag_name = tagss;
      dispatch(createEvent(values, history));
    } else if (values.title !== "" && values.id) {
      values.tag_name = tagss;
      dispatch(updateEvent(values, history));
    }
  };

  const schema = Yup.object().shape({
    event_title: Yup.string()
      .min(10, "Title must be at least 10 characters long.")
      .required("Title is required."),
    start_date: Yup.string().required("Start date is required."),
    end_date: Yup.string().required("End date is required."),
    event_description: Yup.string()
      .min(50, "Description must be at least 50 characters long.")
      .required("Description is required."),
    location: Yup.string().required("Location is required."),
    guidelines: Yup.string()
      .min(50, "Guidelines must be at least 50 characters long.")
      .required("Guidelines are required."),
    participation_type: Yup.string().required(
      "Participation type is required."
    ),
    category_id: Yup.number()
      .required("Please select event category.")
      .positive()
      .integer()
  });

  const ButtonGroup = styled.div`
    display: block;
    width: 100%;

    a,
    button {
      width: 100%;
      margin: 0 0 10px 0;
    }
  `;

  const today = format(new Date());

  return (
    <FormContainer>
      {/* <RowHead>
          <H3>
            {defaultState.id ? `Edit Hackathon` : `Create New Hackathon`}
          </H3>
      </RowHead>     */}
      <Formik
        onSubmit={handleSubmit}
        initialValues={defaultState}
        validationSchema={schema}
        enableReinitialize
      >
        {({ errors, touched, values: { start_date, end_date } }) => (
          <>
            <StyledForm>
              <StyledColumn>
                <RowBody justify="start">
                  <Label htmlFor="event_title">Hackathon Title</Label>
                  <Input
                    id="event_title"
                    display="wide"
                    type="text"
                    name="event_title"
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                  <ErrorSpan>
                    <ErrorMessage name="event_title" />
                  </ErrorSpan>
                </RowBody>
                <RowBody justify="start">
                  <Label htmlFor="event_description">Description</Label>
                  <TextArea
                    wide
                    id="event_description"
                    as="textarea"
                    type="text"
                    name="event_description"
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                  <ErrorSpan>
                    <ErrorMessage name="event_description" />
                  </ErrorSpan>
                </RowBody>
                <RowBody justify="start">
                  <Column>
                    <Label htmlFor="start_date">Event Starts</Label>
                    <Input
                      id="start_date"
                      type="date"
                      name="start_date"
                      placeholder="Event starts"
                      value={start_date || today}
                      min={today}
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <ErrorSpan>
                      <ErrorMessage name="start_date" />
                    </ErrorSpan>
                  </Column>
                  <Column>
                    <Label htmlFor="end_date">Event Ends</Label>
                    <Input
                      id="end_date"
                      type="date"
                      name="end_date"
                      placeholder="Event ends"
                      value={end_date || start_date || today}
                      min={start_date}
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <ErrorSpan>
                      <ErrorMessage name="end_date" />
                    </ErrorSpan>
                  </Column>
                </RowBody>
                <RowBody id="grading_rubrics" justify="start">
                  <Label htmlFor="grading_rubrics">Grading Rubrics (tick all that apply)</Label>
                  <Paragraph>
                    Judges will be expected to grade project submissions on
                    which one of the following
                  </Paragraph>
                  &nbsp;
                  <Checkbox
                    name="rubrics"
                    value="presentation"
                    label="Presentation"
                  />
                  <Checkbox
                    name="rubrics"
                    value="product_fit"
                    label="Product Fit"
                  />
                  <Checkbox
                    name="rubrics"
                    value="functionality"
                    label="Functionality"
                  />
                  <Checkbox
                    name="rubrics"
                    value="innovation"
                    label="Innovation"
                  />
                  <Checkbox
                    name="rubrics"
                    value="product_design"
                    label="Product Design"
                  />
                  <Checkbox
                    name="rubrics"
                    value="extensibility"
                    label="Extensibility"
                  />
                </RowBody>
                <RowBody justify="start">
                  <Column>
                    <Label htmlFor="participation_type">
                      Participation Type
                    </Label>
                    <Select
                      id="participation_type"
                      name="participation_type"
                    >
                      <option value="" disabled hidden>
                        Choose
                      </option>
                      <option value="individual">Individual</option>
                      <option value="team">Team</option>
                      <option value="both">Both</option>
                    </Select>
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <ErrorSpan>
                      <ErrorMessage name="participation_type" />
                    </ErrorSpan>
                  </Column>
                  <Column>
                    <Label htmlFor="event_category">Event Category</Label>
                    <Select id="event_category" name="event_category">
                      <option value="" disabled hidden>
                        Choose
                      </option>
                      {categories.map(({ id, category_name }) => (
                        <option key={id} value={id}>
                          {category_name}
                        </option>
                      ))}
                    </Select>
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <ErrorSpan>
                      <ErrorMessage name="event_category" />
                    </ErrorSpan>
                  </Column>
                </RowBody>
              </StyledColumn>

              <StyledColumn>
                <RowBody justify="start">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    display="wide"
                    id="location"
                    type="text"
                    name="location"
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                  <ErrorSpan>
                    <ErrorMessage name="location" />
                  </ErrorSpan>
                </RowBody>
                <RowBody justify="start">
                  <Label htmlFor="guidelines">Guidelines</Label>
                  <TextArea
                    id="guidelines"
                    wide
                    as="textarea"
                    type="text"
                    name="guidelines"
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                  <ErrorSpan>
                    <ErrorMessage name="guidelines" />
                  </ErrorSpan>
                </RowBody>
                <RowBody justify="start">
                  {" "}
                  <Label htmlFor="input_tags">Tags</Label>
                  <InputTag id="input_tags" tags={defaultState.tag_name}/>
                </RowBody>
                <RowBody id="submission_requirements" justify="start">
                  <Label htmlFor="submission_requirements">
                    Project Submission Requirements (tick all that apply)
                  </Label>
                  <Paragraph>
                    Participants will be expected to submit which one of the
                    following 
                  </Paragraph>

                  <Checkbox
                    name="requirements"
                    value="video_url"
                    label="Video URL"
                  />
                  <Checkbox
                    name="requirements"
                    value="github_url"
                    label="GitHub URL"
                  />
                </RowBody>
                <RowBody justify="start">
                </RowBody>
                <StyledFormBtn color="green" type="submit">
                  Submit
                </StyledFormBtn>
              </StyledColumn>
            </StyledForm>
          </>
        )}
      </Formik>
    </FormContainer>
  );
};

export default HackathonForm;

const FormContainer = styled.div`
  width: 100%; height: 100%;
  position: relative;
`;


const StyledForm = styled(Form)`
  display: flex;
  margin-top: 30px; padding: 20px;
`;

const StyledColumn = styled.div`
  width: 50%; min-height: 70vh;
  padding: 0 10px;

  &:first-child {
    border-right: 2px solid ${props => props.theme.color.grey.border};
  }
`;

const StyledFormBtn = styled(Button)`
  position: absolute; top: calc(100% - 100px); left: 50%;
  width: 50%;
  transform: translateX(-50%);
`;
