import "./Button.scss";

function Button(props) {
  return (
    <div className="add-btn">
      <button
      type="button"
      className={`btn btn-${props.tags}`}
      onClick={props.clickButton}
      id="add-btn"
    >
      {props.title}
    </button>
    </div>
  );
}

export default Button;
