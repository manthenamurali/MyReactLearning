import "./AddUser.css";
import Button from "./widgets/Button";

const AddUser = () => {
  return (
    <div className="details-container">
      <h4>Username</h4>
      <input type="text"></input>
      <h4>Age (Years)</h4>
      <input type="text"></input>
      <Button title="Add User" />
    </div>
  );
};

export default AddUser;
