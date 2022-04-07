import "./Button.css";

const Button = (props) => {
  const classes = "appbutton " + props.className;
  return <button className="appbutton">{props.title}</button>;
};

export default Button;
