import { TextField, Button, CircularProgress } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { auth } from '../../firebase'
import { Controller, useForm } from 'react-hook-form'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        padding: '5vh',
        height: '100vh',
        maxWidth: 'unset',
        [theme.breakpoints.down('sm')]: {
            '&::before': {
                top: '200px',
                backgroundSize: '50%',
            },
        },
    },
    typography: {
        paddingBottom: '5rem',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
    },
    form: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            display: 'block',
        },
        // Fix later, check style for MuiFormControl
        '& > div': {
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                padding: 0,
            },
        },
    },
    button: {
        margin: '1rem 2rem',
        width: 'max-content',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            width: '100%',
            margin: '2rem 0',
        },
    },
    buttonProgress: {
        color: theme.palette.common.white,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    error: {
        fontWeight: 'bold',
        paddingLeft: '16px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
        },
    },
}))

export interface Props {
    resetPassword?: () => void
}

const ChangePassword: React.FC = () => {
    const [error, setError] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const classes = useStyles()
    const { handleSubmit, control } = useForm()
    const onSubmit = async (data: any) => {
        const { email } = data

        try {
            setPasswordMessage('')
            setError('')
            setLoading(true)
            await auth.sendPasswordResetEmail(email)
            setPasswordMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset password')
        }

        setLoading(false)
    }

    return (
        <>
            <h1>Reset password</h1>
            {error && (
                <>
                    <p>{error}</p>
                    <p>{passwordMessage}</p>
                </>
            )}
            <div></div>
            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                className={classes.form}
            >
                <Controller
                    name="email"
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
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
                        required: 'Email required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
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
                        <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                        />
                    )}
                    Change password
                </Button>               
            </form>
            <Link to="/">Sign in</Link>
        </>
    )
}

export default ChangePassword
