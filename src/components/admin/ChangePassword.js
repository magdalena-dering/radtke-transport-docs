import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { adminEmail } from '../constants';
import { useAuth } from "../../contexts/AuthContext";

const ChangePassword = () => {
  const [error, setError] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setPasswordMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setPasswordMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <h1>Reset password</h1>
      {error && (
        <>
          {" "}
          <p>{error}</p>
          <p>{passwordMessage}</p>
        </>
      )}
      <div></div>
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          autoComplete="email"
          required
        />
        <button disabled={loading} type="submit" onClick={handleSubmit}>
          Change password
        </button>
        <Link to="/signin">Sign in</Link>
      </form>
    </>
  );
};

export default ChangePassword;
