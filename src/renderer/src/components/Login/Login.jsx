import "../../assets/styles/Login/Login.css";

import { useContext, useEffect, useState } from "react";

import { Supabase } from "../../App";
import googleSvg from "../../assets/img/google.svg";
import hideSvg from "../../assets/img/hide-eye.svg";
import noteLogo from "../../assets/img/logo.svg";
import showSvg from "../../assets/img/show-eye.svg";

export default function Login() {
  const supabase = useContext(Supabase);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-contents">
        <div className="login-header">
          <img src={noteLogo} alt="logo" />
          <h1>Notes</h1>
        </div>
        <div className="login-titles">
          <h2>Welcome to Note</h2>
          <p>Please log in to continue</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email Address
            <input type="email" name="email" placeholder="email@example.com" />
          </label>
          <label>
            <div className="password-texts">
              Password
              <a href="#/forgot-password">Forgot</a>
            </div>
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
          </label>
          <button className="login-submit-btn" type="submit">
            Login
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
              No account yet? <a href="#/signup">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
