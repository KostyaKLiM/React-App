import Button from "../UI/Button/Button";
import Checkbox from "../UI/Checkbox/Checkbox";
import Input from "../UI/Input/Input";
import GoogleIcon from "../icons/googleicon";
import "./Login.scss";

function Login() {
  return (
    <>
      <div className="login">
        <div className="login__title">NFT Access</div>
        <div className="login__desc">
          Please fill your detail to access your account.
        </div>

        <Input
          title="Email"
          placeholder="debra.holt@example.com"
          type="email"
        />

        <Input title="Password" placeholder="••••••••" type="password" />

        <div className="checkbox">
          <Checkbox title="Remember me" />
          <a href="/" className="forgot">
            Forgot Password?
          </a>
        </div>

        <Button addClass="_primary" title="Sign in" type="sumbit" />

        <Button linkTo="/" addClass="_secondary" title="Sign in with Google" icon={<GoogleIcon/>}/>

        <div className="login__signup">
          Don’t have an account?{" "}
          <a href="/" className="login__signup-up">
            Sign up
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
