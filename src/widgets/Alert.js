import "./Alert.css";
import Button from "./Button";
import CardView from "./CardView";
import RPortal from "react-dom";

// approach 1 : this is using the normal approach, where the alert will be inside the calling component
/* const Alert = (props) => {
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
}; */

// approach 2 : this is using portals. Here a new div will be created in the index.html, above the root div.
// this alert elements will be added to that new div.
const AlertModel = (props) => {
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

const Alert = (props) => {
  return (
    <div>
      {RPortal.createPortal(
        <AlertModel
          title={props.title}
          message={props.message}
          dismissListener={props.dismissListener}
          okText={props.okText}
        />,
        document.getElementById("alert-root")
      )}
    </div>
  );
};

export default Alert;
