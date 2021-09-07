import { Button, CircularProgress, TextField } from "@material-ui/core"
import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Controller, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { actionCodeSettings } from "../../../authLinks"
import { auth } from "../../../firebase"
import { styles } from "./styles"

const useStyles = makeStyles(styles)
const SendAuthLink: React.FC = () => {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { handleSubmit, control } = useForm()
  const classes = useStyles()

  const onSubmit = async (data: any) => {
    const { email } = data
    try {
      setError("")
      setLoading(true)
      window.localStorage.setItem("emailForSignIn", email)
      await auth.sendSignInLinkToEmail(email, actionCodeSettings)
    } catch {
      setError("Failed to send sign in link")
    }
    setLoading(false)
  }
  return (
    <>
      <Link to="/profile">Profile</Link>
      <h1>Send auth link invitation</h1>
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
          variant="contained"
          color="primary"
          disabled={loading}
          type="submit"
          className={classes.button}
        >
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
          Send link
        </Button>
      </form>
      <p>{error}</p>
    </>
  )
}

export default SendAuthLink
