import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  BodyContainer,
  StyledRowHead,
  DashboardContent,
  StyledButton, 
  StyledH4
} from '../../assets/styles/templates/UserEventsdashboardStyling';
import { H4 } from "../../assets/styles/atoms/HeadingStyling";
import EventCard from "../molecules/EventCard";
import { useRegisteredEvents } from "../../hooks";