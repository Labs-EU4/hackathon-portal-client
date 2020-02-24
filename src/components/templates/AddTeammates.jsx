import React, { useState, useEffect, useRef } from "react";
import isEmail from 'validator/lib/isEmail';
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Footer } from "../organisms/index";
import UserHeader from "../organisms/UserHeader";
import WideBody from "../atoms/WideBody";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import Button from "../atoms/Button";
import { addTeamMember, sendEventTeamInvite } from "../../store/events/actions";
import { useSearchUserByEmail } from '../../hooks';
import Nav from "../molecules/Nav";
import { BodyContainerColumn, StyledContainer, StyledWidget, Container, ContainerRadio } from "../styles/templates/AddTeammatesStyling";

const AddTeammates = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [matches, searchString, setSearchString] = useSearchUserByEmail();
  const [noneUser, setNoneUser] = useState(null);
  const validateEmail = (email) => {
    return isEmail(email);
  }

  const handleSubmit = () => {
    const { email } = selectedUser;
    const data = {
      eventId: Number(id),
      email,
      role
    };
    dispatch(addTeamMember(data, history));
  };

  const sendInvite = () => {
    const data = {
      eventId: Number(id),
      email: noneUser,
      role
    };
    dispatch(sendEventTeamInvite(data, history))
  }

  const redirect = (location = "/dashboard") => {
    history.push(location);
  };

  const UserWidget = ({ user, select, ...otherProps }) => {

    return (
      <StyledWidget key={user.id} onClick={() => select(user)} {...otherProps}>
        {user.email}
      </StyledWidget>
    );
  };

  const SearchWidget = () => {
    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current.focus();
    }, []);

    return (
      <Container display="wide">
        <input
          type="text"
          value={searchString}
          onChange={e => {
            setSearchString(e.target.value);
          }}
          placeholder="Search by email"
          ref={inputRef}
        />
        {matches.map(user => (
          <UserWidget key={user.id} user={user} select={setSelectedUser} />
        ))}
        {
          !!matches && validateEmail(searchString) ? setNoneUser(searchString) : setNoneUser(null)
        }
        <Button color="grey" onClick={() => redirect()}>
          Back to dashboard
        </Button>
      </Container>
    );
  };

  const Radio = ({ label, value, type = "radio", ...radioProps }) => {

    return (
      <ContainerRadio>
        {label || value}
        <input type={type} {...radioProps} />
        <span></span>
      </ContainerRadio>
    );
  };

  const RoleWidget = () => {
    return (
      <StyledContainer>
        <RowBody direction="column-reverse">
          <Radio
            label="organizer"
            name="role"
            onChange={() => setRole("organizer")}
            checked={role === "organizer"}
          />
          <Radio
            name="role"
            label="judge"
            onChange={() => setRole("judge")}
            checked={role === "judge"}
          />
        </RowBody>
        <RowBody>
          <Button color="grey" onClick={() => redirect()}>
            Back to dashboard
          </Button>
          <Button color="green" onClick={handleSubmit}>
            Add teammate
          </Button>
        </RowBody>
      </StyledContainer>
    );
  };

  /**
 * Renders message and button to send invite email * To be refactored to a resuable component * @returns */
  const InviteWidget = () => {
    return (
      <StyledContainer>
        <RowBody direction="column-reverse">
          <h6>
            This user is not on this platform. Please select a role for
          click send to invite {" "}
            <span style={{ color: "#273F92", backgroundColor: "aliceblue" }}>
              {noneUser}
            </span>{" "}
            to join your team
        </h6>
        </RowBody>
        <RowBody direction="column-reverse">
          <Radio
            label="organizer"
            name="role"
            onChange={() => setRole("organizer")}
            checked={role === "organizer"}
          />
          <Radio
            name="role"
            label="judge"
            onChange={() => setRole("judge")}
            checked={role === "judge"}
          />
        </RowBody>
        <RowBody>
          <Button color="green" onClick={sendInvite}>
            Send Invite
        </Button>
        </RowBody>
      </StyledContainer>
    );
  };

  return (
    <div>
      <UserHeader />
      <WideBody>
        <Nav />
        <BodyContainerColumn>
          <RowHead>
            <H3>Add Teammates</H3>
          </RowHead>
          <Column>
            <CardWide>
              {!selectedUser ? <SearchWidget /> : <RoleWidget />}
              {noneUser ? <InviteWidget /> : null}
            </CardWide>
          </Column>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default AddTeammates;
