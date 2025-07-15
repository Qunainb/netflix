import { useState } from "react";
import logo from "../assets/logo.png";

import "../Pages/Login.css";

export default function Login() {
  const [loginState, setLoginState] = useState("Sign In");
  return (
    <div className="login">
      <img src={logo} alt="logo" className="login-logo" />
      <div className="login-form">
        <h1>{loginState}</h1>
        <form>
          {loginState === "Sign Up" && (
            <input type="text" placeholder="Enter Your Name" />
          )}
          <input type="text" placeholder="Email or Mobile Number" />
          <input type="password" placeholder="Password" />
          <button>{loginState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            {loginState === "Sign Up" ? (
              <p>Need Help</p>
            ) : (
              <p>Forget your Password</p>
            )}
          </div>
        </form>

        <div className="form-switch">
          {loginState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setLoginState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account{" "}
              <span onClick={() => setLoginState("Sign In")}>Sign In</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
