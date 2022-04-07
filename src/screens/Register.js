import "./Register.css";
import CardView from "../widgets/CardView";
import AddUser from "./AddUser";

const Register = () => {
  return (
    <div>
      <CardView className="details-adduser">
        <AddUser />
      </CardView>
    </div>
  );
};

export default Register;
