import noteLogo from "../../assets/img/logo.svg";

export default function Forgot() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
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
