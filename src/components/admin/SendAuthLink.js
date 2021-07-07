import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { actionCodeSettings } from "../../authLinks";
import { auth } from "../../firebase";

const SendAuthLink = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      window.localStorage.setItem("emailForSignIn", emailRef.current.value);

      await auth.sendSignInLinkToEmail(
        emailRef.current.value,
        actionCodeSettings
      );
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };
  return (
    <>
      <h1>Send auth link invitation</h1>
      <div>{error ? <p>{error}</p> : <p>Success</p>}</div>

      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          autoComplete="email"
        />
        <button disabled={loading} type="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>

      <Link to="/">Back to admin panel</Link>
    </>
  );
};

export default SendAuthLink;
