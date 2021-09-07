import { ThemeProvider } from "@material-ui/core"
import React from "react"
// TODO: Read how to delete the warning
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Admin, Resource } from "react-admin"
import {
  FinanceList,
  FinanceShow,
  FinanceCreate,
  FinanceEdit,
} from "./components/finance"
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
  RAFirebaseOptions,
} from "react-admin-firebase"
import ChangePassword from "./components/auth/changePassword"
import Dashboard from "./components/dashboard"
import SendAuthLink from "./components/auth/authLink"
import SignIn from "./components/auth/signIn"
import theme from "./theme"
import firebaseConfig from "./firebase"
import { Layout } from "./components/layout"

const options: RAFirebaseOptions = {
  logging: true,
  rootRef: "root_collection/some_document",
  watch: ["finance, viatoll"],
}

const dataProvider = FirebaseDataProvider(firebaseConfig, options)
const authProvider = FirebaseAuthProvider(firebaseConfig, options)

const App: React.FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={SignIn}
        layout={Layout}
        dashboard={Dashboard}
        customRoutes={[
          <Route
            key="sendlink"
            path="/profile/sendlink"
            component={SendAuthLink}
          />,
          <Route
            key="changepassword"
            path="/reset-password"
            component={ChangePassword}
          />,
        ]}
      >
        <Resource
          name="finance"
          list={FinanceList}
          show={FinanceShow}
          create={FinanceCreate}
          edit={FinanceEdit}
        />
      </Admin>
      {/* TODO: react-admin private route
      
       */}
      {/* <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/sendlink" component={SendAuthLink} />
            <PrivateRoute path="/changepassword" component={ChangePassword} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" exact component={SignIn} />
          </Switch>
        </AuthProvider>
      </Router> */}
    </ThemeProvider>
  </>
)
export default App
