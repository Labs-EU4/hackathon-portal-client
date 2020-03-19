import React from 'react';

import Button from "../../atoms/Button";
import { AddTeamParticipantContainer } from "../../../assets/styles/templates/AddParticipantTeamsStyling";
import isEmail from "validator/lib/isEmail";
import { useSearchUserByEmail } from "../../../hooks";

export const SearchWidget = props => {
    const { setSelectedUser, setNoneUser } = props;
    const history = useHistory();
    const [matches, searchString, setSearchString] = useSearchUserByEmail();
    const validateEmail = email => {
      return isEmail(email);
    };
    const redirect = (location = "/dashboard") => {
      history.push(location);
    };
    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current.focus();
    }, []);
  
    return (
      <AddTeamParticipantContainer display="wide">
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
        {!matches && validateEmail(searchString)
          ? setNoneUser(searchString)
          : setNoneUser(null)}
        <Button 
          color="grey" 
          onClick={() => redirect(history)}>
          Back to dashboard
        </Button>
      </AddTeamParticipantContainer>
    );
};