import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import {
  Container,
  TextField,
  Button,
  FormHelperText,
  CircularProgress,
  Typography,
} from "@material-ui/core"

import { auth } from "../../../firebase"
import { styles } from "./styles"

const useStyles = makeStyles(styles)
const SignIn: React.FC = () => {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const classes = useStyles()

  const { handleSubmit, control } = useForm()

  const onSubmit = async (data: any) => {
    const { email, password } = data
    try {
      setError("")
      setLoading(true)
      await auth.signInWithEmailAndPassword(email, password)
      history.push("/")
    } catch {
      setError("Failed to sign in")
    }
    setLoading(false)
  }

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
        <Button
          size="medium"
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
  )
}

export default SignIn
