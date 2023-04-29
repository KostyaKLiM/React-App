import CheckMarkIcon from "../../icons/CheckMarkIcon";
import "./Checkbox.scss";

function Checkbox(props) {
  return (
    <>
      <label className="checkbox-block">
        <input className="checkbox-block__input" type="checkbox" />
        <span className="checkbox-block__checkmark">
          <CheckMarkIcon />
        </span>
        <span className="checkbox-block__remember">{props.title}</span>
      </label>
    </>
  );
}

export default Checkbox;
