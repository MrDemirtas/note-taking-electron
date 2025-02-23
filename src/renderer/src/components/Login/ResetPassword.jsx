import "../../assets/styles/Login/Login.css";

import { useContext, useEffect, useState } from "react";

import { Supabase } from "../../App";
import hideSvg from "../../assets/img/hide-eye.svg";
import noteLogo from "../../assets/img/logo.svg";
import showSvg from "../../assets/img/show-eye.svg";

export default function ResetPassword() {
  const supabase = useContext(Supabase);
  const [showPassword, setShowPassword] = useState(false);

  const params = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = params.get("/reset-password#access_token");
  const refreshToken = params.get("refresh_token");
  supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  }).then(console.log);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (
      password !== confirmPassword ||
      password.length < 8 ||
      password.length > 100
    ) {
      console.log("Password does not match or is invalid");
      return;
    }
    console.log(
      await supabase.auth.updateUser({
        password,
      })
    );
  };

  return (
    <div className="login-container">
      <div className="login-contents">
        <div className="login-header">
          <img src={noteLogo} alt="logo" />
          <h1>Notes</h1>
        </div>
        <div className="login-titles">
          <h2>Reset Password</h2>
          <p></p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
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
          </label>
          <label>
            <div className="password-texts">Confirm Password</div>
            <div className="password-input-content">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
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
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
