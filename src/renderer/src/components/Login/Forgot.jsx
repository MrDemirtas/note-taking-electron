import { Supabase } from "../../App";
import noteLogo from "../../assets/img/logo.svg";
import { useContext } from "react";

export default function Forgot() {
  const supabase = useContext(Supabase);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/#/reset-password`,
    }));
  };

  return (
    <div className="login-container">
      <div className="login-contents">
        <div className="login-header">
          <img src={noteLogo} alt="logo" />
          <h1>Notes</h1>
        </div>
        <div className="login-titles">
          <h2>Forgotten your password?</h2>
          <p>Enter your email below, and we’ll send you a link to reset it.</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email Address
            <input type="email" name="email" placeholder="email@example.com" />
          </label>
          <button className="login-submit-btn" type="submit">
            Send Reset Link
          </button>
          <div className="login-other-with">
            <button
              type="button"
              onClick={() => (window.location.hash = "/login")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
