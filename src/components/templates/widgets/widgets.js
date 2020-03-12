import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Button from "../atoms/Button";
import { RowBody } from "../../assets/styles/atoms/RowBodyStyling";
import { useSearchUserByEmail } from "../../hooks";
import {
  StyledContainer,
  AddTeamParticipantContainer,
  StyledWidget
} from "../../assets/styles/templates/AddParticipantTeamsStyling";
import {
  Container,
  ContainerRadio,
  UsersList,
  ChosenJudgesContainer,
  ChosenJudgeImg,
  StyledSearchIcon,
  StyledJudgeWidget,
  UserAvatar,
  UserInfo
} from "../../assets/styles/templates/AddTeammatesStyling";
import isEmail from "validator/lib/isEmail";
