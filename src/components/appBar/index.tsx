import React from "react"
import { useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import { toggleSidebar, useLogout } from "ra-core"
import {
  AppBar as MuiAppBar,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core"
import { styles } from "./styles"
import { AppBarProps } from "react-admin"
import SvgIcon from "../svg"
import { icons } from "../../types"
import { Link } from "react-router-dom"

const useStyles = makeStyles(styles)
export const AppBar: React.FC<AppBarProps> = ({ open }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const logout = useLogout()
  const toggle = () => dispatch(toggleSidebar())
  const signOut = () => logout()

  const menuOpenIcon = <icons.menuOpen />
  const menuCloseIcon = <icons.menuClose />
  const notificationIcon = <icons.notification />
  const profileIcon = <icons.profile />
  const signOutIcon = <icons.signOut />

  return (
    <MuiAppBar position="static" className={classes.root} color="secondary">
      <Toolbar className={classes.toolbar}>
        <IconButton className={classes.iconButton} onClick={toggle}>
          <SvgIcon icon={open ? menuOpenIcon : menuCloseIcon} />
        </IconButton>
        <div className={classes.row}>
          <IconButton className={classes.iconButton}>
            <SvgIcon icon={notificationIcon} />
          </IconButton>
          <Link to="/profile">
            <IconButton className={classes.iconButton}>
              <SvgIcon icon={profileIcon} />
            </IconButton>
          </Link>
          <Button
            className={classes.button}
            endIcon={<SvgIcon icon={signOutIcon} height="24px" />}
            onClick={signOut}
          >
            Sign out
          </Button>
        </div>
      </Toolbar>
    </MuiAppBar>
  )
}
