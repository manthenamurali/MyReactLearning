import "./Alert.css";
import Button from "./Button";
import CardView from "./CardView";

const Alert = (props) => {
  return (
    <div className="backdrop">
      <CardView className="alert">
        <header>
          <h3>{props.title}</h3>
        </header>
        <p>{props.message}</p>
        <footer>
          <Button clickListener={props.dismissListener}>{props.okText}</Button>
        </footer>
      </CardView>
    </div>
  );
};

export default Alert;
