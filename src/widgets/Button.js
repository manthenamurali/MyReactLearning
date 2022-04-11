import "./Button.css";

const Button = (props) => {
  const classes = "appbutton " + props.className;
  return (
    <button onClick={props.clickListener} className={classes}>
      {props.children}
    </button>
  );
};

export default Button;
