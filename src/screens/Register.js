import "./Register.css";
import CardView from "../widgets/CardView";
import AddUser from "./AddUser";
import UsersList from "./UsersList";
import React, { useState } from "react";
import Wrapper from "../utils/Wrapper";

const Register = () => {
  const [registeredUsersList, setUsersList] = useState([]);

  const userAddListner = (newUser) => {
    setUsersList((prevList) => {
      return [...prevList, newUser];
    });
  };

  // can also use React.Fragment instead of wrapper. fragment is react provided approach
  return (
    <Wrapper>
      <CardView className="details-adduser">
        <AddUser userAddedCallback={userAddListner} />
      </CardView>

      <CardView className="details-adduser">
        {registeredUsersList.length === 0 && <h3>No Users Added.</h3>}
        {registeredUsersList.length !== 0 && (
          <UsersList users={registeredUsersList} />
        )}
      </CardView>
    </Wrapper>
  );
};

export default Register;
