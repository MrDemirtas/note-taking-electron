import "../../assets/styles/Login/Login.css";

import googleSvg from "../../assets/img/google.svg";
import hideSvg from "../../assets/img/hide-eye.svg";
import infoCircle from "../../assets/img/info-circle.svg";
import noteLogo from "../../assets/img/logo.svg";
import showSvg from "../../assets/img/show-eye.svg";
import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  };

  return (
    <div className="login-container">
      <div className="login-contents">
        <div className="login-header">
          <img src={noteLogo} alt="logo" />
          <h1>Notes</h1>
        </div>
        <div className="login-titles">
          <h2>Create Your Account</h2>
          <p>
            Sign up to start organizing your notes and boost your productivity.
          </p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email Address
            <input type="email" name="email" placeholder="email@example.com" />
          </label>
          <label>
            <div className="password-texts">Password</div>
            <div className="password-input-content">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  src={showPassword ? hideSvg : showSvg}
                  alt="Show Password"
                />
              </button>
            </div>
            <p className="signup-password-info">
              <img src={infoCircle} alt="info" />
              At least 8 characters
            </p>
          </label>
          <button className="login-submit-btn" type="submit">
            Sign up
          </button>
          <div className="login-other-with">
            <p>Or log in with:</p>
            <button type="button">
              <img src={googleSvg} alt="Login with Google" />
              Google
            </button>
          </div>
          <div className="login-signup">
            <p>
              Already have an account? <a href="#/login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
