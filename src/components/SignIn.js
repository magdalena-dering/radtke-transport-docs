import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {},
}));

const SignIn = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const history = useHistory();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async () => { 
    try {
      setError("");
      setLoading(true);
      await signIn(email, password);
      history.push("/");
    } catch {
      console.log("auth.error.code", error);
      setError("Failed to sign in");
    }
    setLoading(false);
  };
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <h1>Sign in</h1>
      {error && <p>{error}</p>}
      <div></div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="email"
          render={() => (
            <TextField
              value={email}
              onChange={handleEmailChange}
              id="filled-required"
              label="Email"
              required
            />
          )}
        />

        <TextField
          value={password}
          onChange={handlePasswordChange}
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          required
        />

        <Button
          size="medium"
          variant="contained"
          color="primary"
          disabled={loading}
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;
