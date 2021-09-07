import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import { LayoutProps } from "react-admin"
import { setSidebarVisibility, ReduxState } from "ra-core"
import { styles } from "./styles"
import { AppBar } from "../appBar"
import { Sidebar } from "../sidebar"

const useStyles = makeStyles(styles)
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const initialSidebarValue = false
  const isSidebarOpen = (state: ReduxState) => state.admin.ui.sidebarOpen
  const open = useSelector(isSidebarOpen)

  useEffect(() => {
    dispatch(setSidebarVisibility(initialSidebarValue))
  }, [dispatch, initialSidebarValue])

  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <AppBar open={open} />
        <main className={classes.contentWithSidebar}>
          <Sidebar open={open} />
          <div className={classes.content}>{children}</div>
        </main>
      </div>
    </div>
  )
}
