import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { IconLinkProps } from "./link.model"
import SvgIcon from "../svg"
import { styles } from "./styles"

const useStyles = makeStyles(styles)

const IconLink: React.FC<IconLinkProps> = ({ to, text, icon }) => {
  const classes = useStyles()
  return (
    <Typography>
      <Link
        to={{
          pathname: to,
        }}
        className={classes.link}
      >
        {text}
        <SvgIcon icon={icon} width="14px" height="14px" />
      </Link>
    </Typography>
  )
}

export default IconLink
