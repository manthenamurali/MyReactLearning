import "./UsersList.css";
import UserItem from "./UserItem";

const UsersList = (props) => {
  console.log("size = " + props.users.length);

  return (
    <div className="userlist">
      {props.users.map((user) => (
        <UserItem user={user} />
      ))}
    </div>
  );
};

export default UsersList;
