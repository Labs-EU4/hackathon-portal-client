import React, { useState, useEffect, useRef } from "react";
import isEmail from 'validator/lib/isEmail';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { media } from "../../assets/styles/variables/media";
import { addTeamMember, sendEventTeamInvite } from "../../store/events/actions";
import { useSearchUserByEmail } from '../../hooks';

const AddTeammates = ({ id, setEventId, setIsEventModalOpen, setIsAddJudgeOpen }) => {
  const selectedUserArr = useRef([]);
  const [role, setRole] = useState("judge");
  const dispatch = useDispatch();
  const history = useHistory();
  // const { id } = useParams();
  const [matches, searchString, setSearchString] = useSearchUserByEmail();
  const [noneUser, setNoneUser] = useState(null);
  const validateEmail = (email) => {
    return isEmail(email);
  }

  const selectedUsersHadler = async(addedUser) => {
    const newArray = [...selectedUserArr.current, addedUser];
    selectedUserArr.current = newArray;
  }

  const handleSubmit = () => {
    selectedUserArr.current.map(selectedUser => {
      const { email } = selectedUser;
      const data = {
        eventId: Number(id),
        email,
        role
      };
      return dispatch(addTeamMember(data, history));
    });
    setIsEventModalOpen(false);
    setIsAddJudgeOpen(false);
    setEventId(null);
  };

  const handleExit = () => {
    setIsEventModalOpen(true);
    setIsAddJudgeOpen(false);
  };

  const sendInvite = () => {
    const data = {
      eventId: Number(id),
      email: noneUser,
      role
    };
    dispatch(sendEventTeamInvite(data, history))
  }

  // const redirect = (location = "/dashboard") => {
  //   history.push(location);
  // };

  const StyledContainer = styled.div`
    display: block;
    position: relative;
  `;

  

  const SearchWidget = () => {
    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current.focus();
    }, []);

    const Container = styled.div`
      position: relative;

      input {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${props => props.theme.color.black.regular};
        border: 2px solid ${props => props.theme.color.grey.regular};
        border-radius: 6px;
        padding: 10px;
        ${({ display }) =>
        display === "wide" ? `width: 100%;` : `width: 180px;`}

        &:focus {
          border: 2px solid ${props => props.theme.color.primary.regular};
          transition: all 0.4s ease;
          box-shadow: 0 0 3px #ddd;

          & + svg {
            color: ${props => props.theme.color.primary.regular};
          }
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
      border: 2px solid ${props => props.theme.color.primary.regular}; border-bottom: none;
      margin: 10px 0 0;
      padding-bottom: 15px;
      overflow-y: scroll;
      user-select: none;

      &::-webkit-scrollbar-button {
        background-color: blue;
      }
    `;

    const ChosenJudgesContainer = styled.div`
      position: relative;
      display: flex; align-items: center;
      width: 100%; height: 45px;
      background-color: ${props => props.theme.color.white.regular};
      border: 2px solid ${props => props.theme.color.primary.regular};
      border-radius: 20px;
      margin-top: -15px; margin-bottom: 20px;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, .4);
      overflow-x: scroll;
      z-index: 500;
    `;

    const ChosenJudgeImg = styled.img`
      width: 33px; height: 33px;
      border-radius: 50%;
      margin-left: 5px;
      object-fit: cover;
    `;

    const StyledSearchIcon = styled(Icon)`
      position: absolute; top: 10px; left: calc(100% - 30px);
      transform: rotate(90deg);
      cursor: pointer;

      &:hover {
        transform: scale(1.1) rotate(90deg);
      }
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
        {
          searchString.length > 0 
            ? <StyledSearchIcon icon="times" onClick={() => setSearchString('')}/> 
            : <StyledSearchIcon icon="search" />
        }
        <div style={{ display: "flex", flexDirection: "column"}}>
          <UsersList>
            {matches.map(user => (
              // <UserWidget key={user.id} user={user} select={setSelectedUser} />
              <UserWidget key={user.id} user={user} selected={selectedUsersHadler} />
            ))}
            {
              !!matches && validateEmail(searchString) ? setNoneUser(searchString) : setNoneUser(null)
            }
          </UsersList>
          <ChosenJudgesContainer>
            {
              selectedUserArr.current.length > 0 && (
                selectedUserArr.current.map(user => {
                  let memberProfile = JSON.parse(user.image_url);
                  return user.image_url !== null ? (
                    <ChosenJudgeImg src={memberProfile.avatar} alt={user.username}/>
                  ) : (
                    <ChosenJudgeImg 
                      src="https://media.giphy.com/media/g0QET2Iejaa4EQ0eBV/giphy.gif" alt="default-img" 
                    />
                  )
                }) 
              )
            }
          </ChosenJudgesContainer>
        </div>
        <RowBody>
          <Button 
            color="grey" 
            size="half" 
            onClick={handleExit}
          >Back</Button>
          <Button 
            color="green" 
            size="half" 
            onClick={handleSubmit}
          >Add Judge</Button>
        </RowBody>
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
          background-color: ${props => props.theme.color.blue.bg};
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

  // const RoleWidget = () => {
  //   return (
  //     <StyledContainer>
  //       <RowBody direction="column-reverse">
  //         <Radio
  //           label="organizer"
  //           name="role"
  //           onChange={() => setRole("organizer")}
  //           checked={role === "organizer"}
  //         />
  //         <Radio
  //           name="role"
  //           label="judge"
  //           onChange={() => setRole("judge")}
  //           checked={role === "judge"}
  //         />
  //       </RowBody>
  //       <RowBody>
  //         <Button color="grey" onClick={() => redirect()}>
  //           Back to dashboard
  //         </Button>
  //         <Button color="green" onClick={handleSubmit}>
  //           Add teammate
  //         </Button>
  //       </RowBody>
  //     </StyledContainer>
  //   );
  // };

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
    <StyledWideBody>
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
    </StyledWideBody>
  );
};

export default AddTeammates;

const StyledWideBody = styled.div`
  position: absolute; top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, .4);
  z-index: 100;
`;

const StyledCardWide = styled(CardWide)`
  ${props => props.theme.shadow.box};
  position: absolute; top: 50%; left: 50%;
  width: 500px; 
  transform: translate(-50%, -50%);
  z-index: 200;
`;


const UserWidget = ({ user, selected, ...otherProps }) => {
  let memberProfile = JSON.parse(user.image_url);

  const StyledWidget = styled.div`
    position: sticky; top: 0; left: 0;
    display: flex;
    width: calc(100% - 10px);
    background-color: ${props => props.theme.color.white.regular};
    border: 2px solid ${props => props.theme.color.black.regular};
    border-radius: 3px;
    padding: 5px 10px;
    margin-bottom: 2px;
    cursor: pointer;

    &:hover {
      background-color:  ${props => props.theme.color.primary.regular};
      color: ${props => props.theme.color.white.regular};
    }

    &.selected {
      background-color: ${props => props.theme.color.primary.regular};
      opacity: .5;
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
    ${props => props.theme.flex.custom('center', 'flex-start', 'column')};
    margin-left: 5px;
    p {
      &:last-child {
        ${props => props.theme.fontSize.small};
        font-weight: normal;
      }
    }
  `;

  const selectedJudgeHandler = (e) => {
    e.currentTarget.classList.add('selected');
    // Add option to deselect user with conditional to check for that
    selected(user);
  }

  return (
    <StyledWidget 
      key={user.id} 
      // onClick={() => selected(user)} 
      onClick={selectedJudgeHandler} 
      {...otherProps}
    >
      <UserAvatar>
        {
          user.image_url !== null ? (
            <img src={memberProfile.avatar} alt={user.username}/>
          ) : (
            <img 
              src="https://media.giphy.com/media/g0QET2Iejaa4EQ0eBV/giphy.gif" alt="default-img" 
            />
          )
        }
      </UserAvatar>
      <UserInfo>
        <p>{user.username}</p>
        <p>{user.email}</p>
      </UserInfo>
    </StyledWidget>
  );
};
