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
        <div className="input">
          <span> Email </span>
          <input className="input__email" type="email" placeholder="debra.holt@example.com"/>
          <span>Password</span>
          <input className="input__password" type="password" placeholder="••••••••"/>
        </div>
        <div className="checkbox">
          <label className="checkbox__block">
          <input className="checkbox-custom" type="checkbox"/>
          <div className="remember">Remember me</div>
          </label>
          <a href="/" className="forgot">Forgot Password?</a>
        </div>
        <a className="login__sign-in" href="/">Sign in</a>
        <div className="login__google">
          <GoogleIcon/>
          <a href="/" className="login__google-sign">Sign in with Google</a>
        </div>
        <div className="login__signup">Don’t have an account? <a href="/" className="login__signup-up">Sign up</a></div>
      </div>
    </>
  );
}

export default Login;
