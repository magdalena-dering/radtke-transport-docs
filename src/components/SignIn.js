import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  TextField,
  Button,
  FormHelperText,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { Logo } from "../assets";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: "5vh",
    height: "100vh",
    maxWidth: "unset",
    "&::before": {
      backgroundImage: `url(${Logo})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "20%",
      backgroundPosition: "center",
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0.4,
      zIndex: -1,
    },
    [theme.breakpoints.down("sm")]: {
      "&::before": {
        top: "200px",
        backgroundSize: "50%",
      },
    },
  },
  typography: {
    paddingBottom: "5rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  form: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      display: "block",
    },
    // Fix later, check style for MuiFormControl
    "& > div": {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        padding: 0,
      },
    },
  },
  button: {
    margin: "1rem 2rem",
    width: "max-content",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "100%",
      margin: "2rem 0",
    },
  },
  buttonProgress: {
    color: theme.palette.common.white,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  error: {
    fontWeight: "bold",
    paddingLeft: "16px",
  },
}));

const SignIn = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const history = useHistory();
  const classes = useStyles();
  
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      setError("");
      setLoading(true);
      await signIn(email, password);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  };

  return (
    <Container className={classes.root} maxWidth="lg" fixed>
      <Typography className={classes.typography} align="left" variant="h4">
        Radtke Transport Docs
      </Typography>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className={classes.form}
      >
        <Controller
          name="email"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              id="email"
              label="Email"
              value={value}
              onChange={onChange}
              helperText={error ? error.message : null}
              error={!!error}
              required
            />
          )}
          control={control}
          defaultValue=""
          rules={{
            required: "Email required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          }}  
          InputProps={{
            className: classes.input,
          }}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Password"
              value={value}
              onChange={onChange}
              helperText={error ? error.message : null}
              error={!!error}
              type="password"
              required
            />
          )}
          rules={{ required: "Password required" }}
          className={classes.root}
        />
        <Button
          size="medium"
          variant="contained"
          color="primary"
          disabled={loading}
          type="submit"
          className={classes.button}
        >
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
          Sign in
        </Button>
        <FormHelperText error={true} className={classes.error}>
          {error}
        </FormHelperText>
      </form>
    </Container>
  );
};

export default SignIn;
