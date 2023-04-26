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
      </div>
    </>
  );
}

export default Login;
