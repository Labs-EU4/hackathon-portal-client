import React, { useState, useEffect, useRef } from "react";
import isEmail from 'validator/lib/isEmail';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

// import { Footer } from "../organisms/index";
// import UserHeader from "../organisms/UserHeader";
import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import Button from "../atoms/Button";
import { type, Solid, media } from "../index";
import { addTeamMember, sendEventTeamInvite } from "../../store/events/actions";
import { useSearchUserByEmail } from '../../hooks';

const AddTeammates = () => {
  const [selectedUserArr, setSelectedUserArr] = useState([]);
  const [role, setRole] = useState("judge");
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [matches, searchString, setSearchString] = useSearchUserByEmail();
  const [noneUser, setNoneUser] = useState(null);
  const validateEmail = (email) => {
    return isEmail(email);
  }


  const selectedUsersHadler = (addedUser) => {
    setSelectedUserArr([...selectedUserArr, addedUser]);
  }

  const handleSubmit = () => {
    selectedUserArr.map(selectedUser => {
      const { email } = selectedUser;
      const data = {
        eventId: Number(id),
        email,
        role
      };
      return dispatch(addTeamMember(data, history));
    });
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

  const StyledContainer = styled.div`
    display: block;
    position: relative;
  `;

  const UserWidget = ({ user, select, ...otherProps }) => {
    let memberProfile = JSON.parse(user.image_url);

    const StyledWidget = styled.div`
      position: sticky; top: 0; left: 0;
      display: flex;
      width: calc(100% - 10px);
      background-color: white;
      border: 2px solid ${props => props.theme.color.black.regular};
      border-radius: 3px;
      padding: 5px 10px;
      margin-bottom: 2px;
      cursor: pointer;

      &:hover {
        border: 2px solid ${props => props.theme.color.primary.regular};
      }
    `;

    const UserAvatar = styled.figure`
      width: 50px; height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 10px;

      & > img {
        width: 100%;
      }
    `;

    const UserInfo = styled.div`

    `;

    return (
      <StyledWidget key={user.id} onClick={() => select(user)} {...otherProps}>
        <UserAvatar>
          {
            user.image_url !== null ? (
              <img src={memberProfile.avatar} alt={user.username}/>
            ) : null
          }
        </UserAvatar>
        <UserInfo>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </UserInfo>
      </StyledWidget>
    );
  };

  const SearchWidget = () => {
    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current.focus();
    }, []);

    const Container = styled.div`
      input {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${Solid.BLACK};
        border: 1px solid ${Solid.BORDER_GREY};
        border-radius: 6px;
        padding: 10px;
        ${({ display }) =>
        display === "wide" ? `width: 100%;` : `width: 180px;`}

        &:focus {
          transition: all 0.5s;
          box-shadow: 0 0 3px #ddd;
        }
      }

      @media ${media.tablet} {
        width: 100%;
        margin-right: 0;
      }
    `;

    const UsersList = styled.div`
      ${props => props.theme.shadow.box};
      width: 100%; height: 48.25vh;
      overflow-y: scroll;
      margin: 10px 0;
    `;

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
        <UsersList>
          {matches.map(user => (
            // <UserWidget key={user.id} user={user} select={setSelectedUser} />
            <UserWidget key={user.id} user={user} select={selectedUsersHadler} />
          ))}
          {
            !!matches && validateEmail(searchString) ? setNoneUser(searchString) : setNoneUser(null)
          }
        </UsersList>
        <Button color="grey" onClick={() => redirect()}>
          Back to dashboard
        </Button>
        <Button color="green" onClick={handleSubmit}>
            Add teammate
          </Button>
      </Container>
    );
  };

  const Radio = ({ label, value, type = "radio", ...radioProps }) => {
    const Container = styled.label`
      /* Customize the label (the container) */
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      /* Hide the browser's default radio button */
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        /* When the radio button is checked, add a blue background */
        &:checked ~ span {
          background-color: #2196f3;
        }

        /* Show the indicator (dot/circle) when checked */
        &:checked ~ span:after {
          display: block;
        }
      }

      /* Create a custom radio button */
      span {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
        border-radius: 50%;

        /* Create the indicator (the dot/circle - hidden when not checked) */
        &:after {
          content: "";
          position: absolute;
          display: none;

          /* Style the indicator (dot/circle) */
          top: 9px;
          left: 9px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: white;
        }
      }

      /* On mouse-over, add a grey background color */
      &:hover {
        input ~ span {
          background-color: #ccc;
        }
      }
    `;

    return (
      <Container>
        {label || value}
        <input type={type} {...radioProps} />
        <span></span>
      </Container>
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
 * Renders message and button to send invite email
 * To be refactored to a resuable component
 * @returns
 */
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
    <WideBody>
      <Column>
        <StyledCardWide>
          <RowHead>
            <H3>Add Teammates</H3>
          </RowHead>
          {/* {!selectedUser ? <SearchWidget /> : <RoleWidget />} */}
          {<SearchWidget />}
          {noneUser ? <InviteWidget /> : null}
        </StyledCardWide>
      </Column>
    </WideBody>
  );
};

export default AddTeammates;

const StyledCardWide = styled(CardWide)`
  ${props => props.theme.shadow.box};
  width: 500px; 
`;
