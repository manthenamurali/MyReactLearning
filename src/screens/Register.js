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

  console.log("refresh register screen....");

  return (
    <div>
      <CardView className="details-adduser">
        <AddUser userAddedCallback={userAddListner} />
      </CardView>

      <CardView className="details-adduser">
        <UsersList users={registeredUsersList} />
      </CardView>
    </div>
  );
};

export default Register;
