import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  FormContainer,
  StyledForm,
  StyledColumn,
  StyledFormBtn,
  StyledH3,
  StyledRowHead,
  StyledLabel,
  StyledParagraph
} from "../../assets/styles/templates/HackathonFormStyling";
import { RowBody } from "../../assets/styles/atoms/RowBodyStyling";
import { Column } from "../../assets/styles/atoms/ColumnStyling";
import { ExitButton } from "../../assets/styles/atoms/ExitButtonStyling";
import Icon from "../atoms/Icon";
import Input from "../atoms/Input";
import Checkbox from "../molecules/Checkbox";
import TextArea from "../atoms/TextArea";
import Select from "../atoms/Select";
import { ErrorSpan } from "../../assets/styles/atoms/SpanStyling";
import InputTag from "../molecules/TagsInput";
import {
  createEvent,
  fetchEventCategories,
  updateEvent
} from "../../store/events/actions";
import { format } from "../../utils/date";

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
    prize: initialState?.prize || "",
    tag_name: initialState?.tag_name || [],
    rubrics: initialState?.rubrics || [],
    requirements: initialState?.requirements || [],
    difficulty_level: initialState?.difficulty_level || "beginner",
    participant_limit: initialState?.participant_limit || "",
    start_time: initialState?.start_time || "",
    end_time: initialState?.end_time || "",
    guidelines: initialState?.guidelines || "",
    participation_type: initialState?.participation_type || "individual",
    category_id: initialState?.category_id || 1
  };

  const handleSubmit = values => {
    const participationTypeValue = document.getElementById("participation_type")
      .value;
    const difficultyLevelValue = document.getElementById("difficulty_level")
      .value;
    const categoryIdValue = document.getElementById("event_category").value;
    values.difficulty_level = difficultyLevelValue;
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

  const handleExit = () => {
    history.push("/dashboard");
  };

  const schema = Yup.object().shape({
    event_title: Yup.string()
      .matches(/\b.*[a-zA-Z]+.*\b/, "Hackathon title cannot be just a number.")
      .min(10, "Title must be at least 10 characters long.")
      .max(60, "Event title cannot be more than 60 characters long.")
      .required("Title is required."),
    start_date: Yup.string().required("Start date is required."),
    end_date: Yup.string().required("End date is required."),
    event_description: Yup.string()
      .min(50, "Description must be at least 50 characters long.")
      .max(3000, "Description cannot be more than 3000 characters long.")
      .required("Description is required."),
    location: Yup.string()
      .matches(/\b.*[a-zA-Z]+.*\b/, "Location cannot be just a number.")
      .min(5, "Location must be at least 5 characters long.")
      .max(50, "Location cannot be more than 50 characters long.")
      .required("Location is required."),
    guidelines: Yup.string()
      .min(50, "Guidelines must be at least 50 characters long.")
      .max(800, "Guidelines cannot be more than 800 characters long.")
      .required("Guidelines are required."),
    participation_type: Yup.string().required(
      "Participation type is required."
    ),
    participant_limit: Yup.number().min(1, "Participant cannot be less than 1"),
    prize: Yup.string()
      .min(10, "Prize must be at least 10 characters long.")
      .max(100, "Prize cannot be more than 100 characters long.")
      .required("Prize is required."),
    difficulty_level: Yup.string().required(
      "Please select a difficulty level."
    ),
    start_time: Yup.string().required("Start Time is required."),
    end_time: Yup.string().required("End Time is required."),
    category_id: Yup.number()
      .required("Please select event category.")
      .positive()
      .integer(),
    rubrics: Yup.array().required("Please select a grading rubric."),
    requirements: Yup.array().required(
      "Please select a submission requirement."
    )
  });

  const today = format(new Date());

  return (
    <FormContainer>
      <StyledRowHead>
        <StyledH3>
          {defaultState.id ? `Edit Hackathon` : `Create New Hackathon`}
        </StyledH3>
        <ExitButton right onClick={handleExit} color="primary">
          <Icon icon="times" />
        </ExitButton>
      </StyledRowHead>
      <Formik
        onSubmit={handleSubmit}
        initialValues={defaultState}
        validationSchema={schema}
        enableReinitialize
      >
        {({
          errors,
          touched,
          values: { start_date, end_date, start_time, end_time }
        }) => (
          <>
            <StyledForm>
              <StyledColumn>
                <RowBody justify="start">
                  <StyledLabel htmlFor="event_title">
                    Hackathon Title
                  </StyledLabel>
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
                  <StyledLabel htmlFor="event_description">
                    Description
                  </StyledLabel>
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
                  <StyledLabel htmlFor="location">Location</StyledLabel>
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
                  <Column>
                    <StyledLabel htmlFor="start_date">Event Starts</StyledLabel>
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
                    <StyledLabel htmlFor="end_date">Event Ends</StyledLabel>
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
                <RowBody justify="start">
                  <Column>
                    <StyledLabel htmlFor="start_time">Start Time</StyledLabel>
                    <Input
                      id="start_time"
                      type="time"
                      name="start_time"
                      placeholder="Start Time"
                      value={start_time || today}
                      min={today}
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <ErrorSpan>
                      <ErrorMessage name="start_time" />
                    </ErrorSpan>
                  </Column>
                  <Column>
                    <StyledLabel htmlFor="end_time">End Time</StyledLabel>
                    <Input
                      id="end_time"
                      type="time"
                      name="end_time"
                      placeholder="End Time"
                      value={end_time || start_time || today}
                      min={start_time}
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <ErrorSpan>
                      <ErrorMessage name="end_time" />
                    </ErrorSpan>
                  </Column>
                </RowBody>
                <RowBody id="grading_rubrics" justify="start">
                  <StyledLabel htmlFor="grading_rubrics">
                    Grading Rubrics (tick all that apply)
                  </StyledLabel>
                  <StyledParagraph>
                    Judges will be expected to grade project submissions on
                    which one of the following
                  </StyledParagraph>

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
              </StyledColumn>

              <StyledColumn>
                <RowBody justify="start">
                  <StyledLabel htmlFor="prize">Prize</StyledLabel>
                  <Input display="wide" id="prize" type="text" name="prize" />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                  <ErrorSpan>
                    <ErrorMessage name="prize" />
                  </ErrorSpan>
                </RowBody>
                <RowBody justify="start">
                  <Column>
                    <StyledLabel htmlFor="participation_type">
                      Participation Type
                    </StyledLabel>
                    <Select id="participation_type" name="participation_type">
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
                    <StyledLabel htmlFor="event_category">
                      Event Category
                    </StyledLabel>
                    <Select id="event_category" name="event_category">
                      <option value="" disabled hidden>
                        Choose
                      </option>
                      {categories.map(({ id, category_name }) => (
                        <option key={category_name} value={id}>
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
                <RowBody>
                  <Column>
                    <RowBody justify="start">
                      <StyledLabel htmlFor="participant_limit">
                        Number of Participants
                      </StyledLabel>
                      <Input
                        display="wide"
                        id="participant_limit"
                        type="number"
                        name="participant_limit"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorSpan>
                        <ErrorMessage name="participant_limit" />
                      </ErrorSpan>
                    </RowBody>
                  </Column>
                </RowBody>
                <RowBody justify="start">
                  <Column>
                    <StyledLabel htmlFor="difficulty_level">
                      Difficulty Level
                    </StyledLabel>
                    <Select id="difficulty_level" name="difficulty_level">
                      <option value="" disabled hidden>
                        Choose
                      </option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </Select>
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <ErrorSpan>
                      <ErrorMessage name="difficulty_level" />
                    </ErrorSpan>
                  </Column>
                  <Column>
                    {" "}
                    <StyledLabel htmlFor="input_tags">Tags</StyledLabel>
                    <InputTag id="input_tags" tags={defaultState.tag_name} />
                  </Column>
                </RowBody>

                <RowBody justify="start">
                  <StyledLabel htmlFor="guidelines">Guidelines</StyledLabel>
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
                <RowBody id="submission_requirements" justify="start">
                  <StyledLabel htmlFor="submission_requirements">
                    Project Submission Requirements (tick all that apply)
                  </StyledLabel>
                  <StyledParagraph>
                    Participants will be expected to submit which one of the
                    following
                  </StyledParagraph>

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
                <RowBody justify="start"></RowBody>
                <StyledFormBtn color="primary-reverse" type="submit">
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
