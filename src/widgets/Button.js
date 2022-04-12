import "./Button.css";

{
  /* this is another way of exporting the class or function*/
}
export default function Button(props) {
  const classes = "appbutton " + props.className;
  return (
    <button onClick={props.clickListener} className={classes}>
      {props.children}
    </button>
  );
}
