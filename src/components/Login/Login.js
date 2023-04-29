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

        <Input 
        title="Password" 
        placeholder="••••••••" 
        type="password" 
        />

        <div className="checkbox">
          <Checkbox title="Remember me"/>

          <a href="/" className="forgot">
            Forgot Password?
          </a>
        </div>
        <a className="login__sign-in" href="/">
          Sign in
        </a>
        <div className="login__google">
          <GoogleIcon />
          <a href="/" className="login__google-sign">
            Sign in with Google
          </a>
        </div>
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
