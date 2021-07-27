import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Typography,
    createStyles,
    makeStyles,
    
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'
import { auth } from '../../firebase'

const styles = createStyles({
    root: {
        borderRadius: '0.2rem',
    },

    menuButton: {
        marginRight: '2rem',
    },
    title: {
        flexGrow: 1,
    },
})

const useStyles = makeStyles(styles)
const Dashboard: React.FC = () => {
    const [error, setError] = useState('')    
    const history = useHistory()
    const location = history.location.pathname.replace(/\//g, '')
    const classes = useStyles();

    const handleLogOut = async () => {
        setError('')
        try {
            await auth.signOut()
            history.push('/')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
            <AppBar position="static" color="primary" className={classes.root}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon color="secondary" />
                    </IconButton>
                    <Typography
                        color="secondary"
                        variant="h6"
                        className={classes.title}
                    >
                        {location}
                    </Typography>
                    <Button
                        startIcon={<ExitToAppRoundedIcon />}
                        onClick={handleLogOut}
                    >
                        Log out
                    </Button>
                </Toolbar>
            </AppBar>            
            <p>{error && error}</p>  
            <p>Do you want to add another person to share your data?</p>{' '}
            <Link to="/sendlink">Add an account</Link>
            <p>Do you want change your password?</p>{' '}
            <Link to="/changepassword">Change password</Link>
        </>
    )
}

export default Dashboard
