import { createStyles, Theme } from "@material-ui/core/styles"
import logo from "../../../assets/images/logo.svg"

export const styles = ({ breakpoints, palette }: Theme) =>
  createStyles({
    root: {
      position: "relative",
      padding: "5vh",
      height: "100vh",
      maxWidth: "unset",
      "&::before": {
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "20%",
        backgroundPosition: "center",
        position: "absolute",
        content: '""',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.4,
        zIndex: -1,
      },
      [breakpoints.down("sm")]: {
        "&::before": {
          top: "200px",
          backgroundSize: "50%",
        },
      },
    },
    typography: {
      paddingBottom: "5rem",
      textAlign: "center",
      [breakpoints.up("sm")]: {
        textAlign: "left",
      },
    },
    form: {
      textAlign: "center",
      display: "block",
      [breakpoints.up("sm")]: {
        textAlign: "left",

        padding: 0,
      },
      // Fix later, check style for MuiFormControl
      "& > div": {
        width: "100%",
        [breakpoints.up("sm")]: {
          width: "unset",
        },
      },
    },
    button: {
      color: palette.common.white,
      backgroundColor: palette.primary.main,
      padding: "6px 12px",
      borderRadius: "50px",
      marginTop: "24px",
      "&:hover": {
        color: palette.primary.dark,
        backgroundColor: palette.background.default,
      },
      [breakpoints.up("sm")]: {
        marginTop: 0,
        marginLeft: "24px",
      },
    },
    // TODO: Finish here - mobile first
    buttonProgress: {
      color: palette.common.white,
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
    error: {
      paddingLeft: "16px",
      [breakpoints.up("sm")]: {
        fontWeight: "bold",
        paddingLeft: 0,
      },
    },
  })
