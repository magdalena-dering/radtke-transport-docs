import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";

const SignUp = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  const history = useHistory();

  auth.isSignInWithEmailLink(window.location.href);
  const email = window.localStorage.getItem("emailForSignIn");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailRef.current.value !== email) {
      return setError(`Please provide your email - ${email} for confirmation`);
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      auth.signInWithEmailLink(email, window.location.href);
      window.localStorage.removeItem("emailForSignIn");
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/signin");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  };
  // console.log('currentUser', currentUser)
  return (
    <>
      <h1>Be proud! You are invaited to be a part of Radtke Transport.</h1>
      <div>{error && <p>{error}</p>}</div>

      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          autoComplete="email"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          autoComplete="new-password"
        />
        <input
          ref={passwordConfirmRef}
          type="password"
          placeholder="Confirm Password"
          autoComplete="confirm-password"
        />
        <button disabled={loading} type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUp;
