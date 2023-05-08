import { useState } from "react";
import "./Input.scss";
import EyeClosetIcon from "../../icons/EyeClosetIcon";

function Input(props) {
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () =>{
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
      <label className="input">
        <span> {props.title} </span>
        <input
          className="input__email" 
          type={passwordType}
          placeholder={props.placeholder}
        />
        <span onClick={togglePassword}>
        <EyeClosetIcon/>
        </span>
      </label>
  );
}

export default Input;
