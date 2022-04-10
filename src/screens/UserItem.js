import "./UserItem.css";

const UserItem = (props) => {
  const age = `(${props.user.age} years old)`;
  return <p className="useritem">{`${props.user.userName} ${age}`}</p>;
};

export default UserItem;
