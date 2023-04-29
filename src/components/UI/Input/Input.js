import "./Input.scss";

function Input(props) {
  return (
    <>
      <label className="input">
        <span> {props.title} </span>
        <input
          className="input__email" 
          type={props.type}
          placeholder={props.placeholder}
        />
      </label>
    </>
  );
}

export default Input;
