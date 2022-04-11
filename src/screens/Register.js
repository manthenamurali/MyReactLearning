import "./Register.css";
import CardView from "../widgets/CardView";
import AddUser from "./AddUser";
import UsersList from "./UsersList";
import { useState } from "react";

const Register = () => {
  const [registeredUsersList, setUsersList] = useState([]);

  const userAddListner = (newUser) => {
    setUsersList((prevList) => {
      return [...prevList, newUser];
    });
  };

  return (
    <div>
      <CardView className="details-adduser">
        <AddUser userAddedCallback={userAddListner} />
      </CardView>

      <CardView className="details-adduser">
        {registeredUsersList.length === 0 && <h3>No Users Added.</h3>}
        {registeredUsersList.length !== 0 && (
          <UsersList users={registeredUsersList} />
        )}
      </CardView>
    </div>
  );
};

export default Register;
