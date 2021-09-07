import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import { getResources, MenuItemLink } from "react-admin"
import { styles } from "./styles"
import { SidebarTypes } from "./sidebar.model"
import SvgIcon from "../svg"
import { IconNames } from "../../types"

const useStyles = makeStyles(styles)
export const Sidebar: React.FC<SidebarTypes> = ({ open }) => {
  const classes = useStyles({ open })
  const resources = useSelector(getResources)

  return (
    <div className={classes.sidebar}>
      <MenuItemLink
        to="/"
        primaryText="Dasboard"
        leftIcon={<SvgIcon name={IconNames.dashboard} />}
        className={classes.root}
        activeClassName={classes.active}
        exact
      />
      {resources.map(resource => (
        <MenuItemLink
          key={resource.name}
          to={`/${resource.name}`}
          primaryText={resource.name}
          leftIcon={<SvgIcon name={resource.name} />}
          className={classes.root}
          activeClassName={classes.active}
        />
      ))}
    </div>
  )
}
