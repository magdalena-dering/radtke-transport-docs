import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  Paper,
  FormHelperText,
  Breadcrumbs,
} from "@material-ui/core"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { auth } from "../../../firebase"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { styles } from "./styles"
import { FormValues } from "../../../types.model"

const useStyles = makeStyles(styles)
export interface Props {
  resetPassword?: () => void
}

const ChangePassword: React.FC = () => {
  const [error, setError] = useState("")
  const [passwordMessage, setPasswordMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const classes = useStyles()

  const { handleSubmit, control } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const { email } = data

    try {
      setPasswordMessage("")
      setError("")
      setLoading(true)
      await auth.sendPasswordResetEmail(email)
      setPasswordMessage("Check your inbox for further instructions.")
    } catch {
      setError("Failed to reset password.")
    }
    setLoading(false)
  }

  return (
    <Paper className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/profile">Profile</Link>
      </Breadcrumbs>
      <Typography variant="h6">Reset password</Typography>
      {passwordMessage && (
        <Typography color="primary">{passwordMessage}</Typography>
      )}
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
          Reset
        </Button>
        <FormHelperText error={true} className={classes.error}>
          {error}
        </FormHelperText>
      </form>
    </Paper>
  )
}

export default ChangePassword
