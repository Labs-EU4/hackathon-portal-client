import React, { useEffect, useRef } from 'react';

import Button from "../../atoms/Button";
import { RowBody } from "../../../assets/styles/atoms/RowBodyStyling";
import { 
    Container,
    UsersList,
    ChosenJudgesContainer,
    ChosenJudgeImg,
    StyledSearchIcon
} from "../../../assets/styles/templates/AddTeammatesStyling";
import { JudgeWidget } from './JudgeWidget';
import isEmail from "validator/lib/isEmail";
import { useSearchUserByEmail } from "../../../hooks";

export const JudgesSearchWidget = props => {
    const { 
      selectedUsersHandler, 
      selectedUserArr,
      setNoneUser,
      handleExit,
      handleSubmit,
    } = props;
    const [matches, searchString, setSearchString] = useSearchUserByEmail();
    const validateEmail = email => {
      return isEmail(email);
    };
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
        {
          searchString.length > 0 
            ? <StyledSearchIcon icon="times" onClick={() => setSearchString('')}/> 
            : <StyledSearchIcon icon="search" />
        }
        <div style={{ display: "flex", flexDirection: "column"}}>
          <UsersList>
            {matches.map(user => (
              // <UserWidget key={user.id} user={user} select={setSelectedUser} />
              <JudgeWidget key={user.id} user={user} selected={selectedUsersHandler} />
            ))}
            {
              !!matches && validateEmail(searchString) 
                ? setNoneUser(searchString) 
                : setNoneUser(null)
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