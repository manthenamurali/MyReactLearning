import "./AddUser.css";
import Button from "../widgets/Button";
import { useState } from "react";
import Validations from "../utils/Validations";
import Alert from "../widgets/Alert";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const clickListener = () => {
    console.log("Add User button clicked");
    addUser();
  };

  function addUser() {
    const newUser = {
      userName: userName,
      age: age,
    };

    const validationUtil = new Validations();
    const validationMsg = validationUtil.validateAddUser(newUser);
    if (validationMsg) {
      console.log("validation error -> " + validationMsg);
      setAlertMessage(validationMsg);
    } else {
      props.userAddedCallback(newUser);
      clear();
    }
  }

  function clear() {
    setUserName("");
    setAge("");
  }

  const userNameChangeListener = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeListener = (event) => {
    setAge(event.target.value);
  };

  const dismissAlertListener = () => {
    setAlertMessage("");
  };

  return (
    <div className="details-container">
      {/* show alert message */}
      {alertMessage.length !== 0 && (
        <Alert
          title="Alert"
          message={alertMessage}
          okText="OK"
          dismissListener={dismissAlertListener}
        />
      )}

      <h4>Username</h4>
      <input
        type="text"
        onChange={userNameChangeListener}
        value={userName}
      ></input>
      <h4>Age (Years)</h4>
      <input
        value={age}
        type="number"
        onChange={userAgeChangeListener}
        minLength="2"
        maxLength="2"
      ></input>
      <Button clickListener={clickListener}>Add User</Button>
    </div>
  );
};

export default AddUser;
