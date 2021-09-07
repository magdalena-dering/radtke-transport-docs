import { makeStyles, Paper, Typography } from "@material-ui/core"
import React from "react"
import { styles } from "./styles"

const useStyles = makeStyles(styles)
const Dashboard: React.FC = () => {
  const classes = useStyles()
  const date = new Date().toDateString()
  return (
    <Paper className={classes.root}>
      <Typography>Welcome!</Typography>
      <Typography>{date}</Typography>
    </Paper>
  )
}

export default Dashboard
