import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ChangePassword from './components/admin/ChangePassword'
import Dashboard from './components/admin/Dashboard'
import SendAuthLink from './components/admin/SendAuthLink'
import PrivateRoute from './components/PrivateRoute'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { AuthProvider } from './contexts/AuthContext'
import theme from './theme'

const App: React.FC = () => (
    <>
        <ThemeProvider theme={theme}>
            <Router>
                <AuthProvider>
                    <Switch>
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                        <PrivateRoute
                            path="/sendlink"
                            component={SendAuthLink}
                        />
                        <PrivateRoute
                            path="/changepassword"
                            component={ChangePassword}
                        />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/" exact component={SignIn} />
                    </Switch>
                </AuthProvider>
            </Router>
        </ThemeProvider>
    </>
)
export default App
