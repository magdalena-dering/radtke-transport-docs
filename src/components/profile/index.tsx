import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core"
import React from "react"
import { auth } from "../../firebase"
import { icons } from "../../types"
import IconLink from "../link"
import { styles } from "./styles"

const sendIcon = <icons.send />
const passwordIcon = <icons.password />

const useStyles = makeStyles(styles)
const Profile: React.FC = () => {
  const email = auth?.currentUser?.email

  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Table aria-label="profile table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className={classes.cell}>
              Role
            </TableCell>
            <TableCell align="left" className={classes.cell}>
              Email
            </TableCell>
            <TableCell align="left" className={classes.cell}>
              Access
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left">Admin</TableCell>
            <TableCell align="left">{email}</TableCell>
            <TableCell align="left">Create, Read, Update, Delete </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className={classes.linkContainer}>
        <IconLink
          to="/profile/sendlink"
          text="Send invitation"
          icon={sendIcon}
        />
        <IconLink
          to="/reset-password"
          text="Reset password"
          icon={passwordIcon}
        />
      </div>
    </Paper>
  )
}

export default Profile
