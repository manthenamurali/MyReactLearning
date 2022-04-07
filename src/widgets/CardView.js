import "./CardView.css";

const CardView = (props) => {
  const cardStyle = "cardview " + props.className;
  return <div className={cardStyle}>{props.children}</div>;
};

export default CardView;
