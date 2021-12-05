import {
  Button,
  CircularProgress,
  FormHelperText,
  TextField,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { auth } from "../../../firebase"
import { FormValues } from "../../../types.model"
import { styles } from "./styles"

const useStyles = makeStyles(styles)

const SignUp = () => {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const classes = useStyles()
  auth.isSignInWithEmailLink(window.location.href)

  const { handleSubmit, control } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const emailLocaleStorage = window.localStorage.getItem("emailForSignIn")
    const { email, password, confirmPassword } = data

    if (email !== emailLocaleStorage) {
      return setError(`Please provide your email - ${email} for confirmation`)
    }

    if (password !== confirmPassword) {
      return setError("Password do not match")
    }
    try {
      setError("")
      setLoading(true)
      await auth.createUserWithEmailAndPassword(email, password)
      history.push("/signin")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <h1>Be proud! You are invaited to be a part of Radtke Transport.</h1>
      <div>{error && <p>{error}</p>}</div>

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
        />
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Confirm 
                            password"
              value={value}
              onChange={onChange}
              helperText={error ? error.message : null}
              error={!!error}
              type="confirmPassword"
              required
            />
          )}
          rules={{ required: "Confrim password required" }}
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
    </>
  )
}

export default SignUp
