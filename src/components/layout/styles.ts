import { createStyles, Theme } from "@material-ui/core/styles"
import logo from "../../assets/images/logo.svg"

export const styles = ({ breakpoints, palette }: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      zIndex: 1,
      minHeight: "100vh",
      backgroundColor: palette.background.default,
      position: "relative",
      "&::before": {
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "20%",
        backgroundPosition: "center",
        position: "absolute",
        content: '""',
        top: "20%",
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.2,
        zIndex: -1,
      },
    },
    appFrame: {
      display: "flex",
      flexDirection: "column",
      overflowX: "auto",
      paddingBottom: "24px",
    },
    contentWithSidebar: {
      display: "flex",
      flexGrow: 1,
      paddingRight: "16px",
      paddingLeft: "16px",
      [breakpoints.up("sm")]: {
        paddingRight: "24px",
        paddingLeft: "24px",
      },
      [breakpoints.up("md")]: {
        paddingRight: "40px",
        paddingLeft: "40px",
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 2,
      paddingTop: "24px",
      [breakpoints.up("sm")]: {
        paddingTop: "24px",
      },
    },
  })
