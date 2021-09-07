import { createStyles, Theme } from "@material-ui/core/styles"

export const styles = ({ breakpoints, palette }: Theme) =>
  createStyles({
    root: {
      position: "relative",
      padding: "5vh",
      height: "100vh",
      maxWidth: "unset",
      [breakpoints.down("sm")]: {
        "&::before": {
          top: "200px",
          backgroundSize: "50%",
        },
      },
    },
    typography: {
      paddingBottom: "5rem",
      [breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    form: {
      [breakpoints.down("sm")]: {
        textAlign: "center",
        display: "block",
      },
      // TODO: Check style for MuiFormControl
      "& > div": {
        [breakpoints.down("sm")]: {
          width: "100%",
          padding: 0,
        },
      },
    },
    button: {
      backgroundColor: palette.common.white,
      color: palette.primary.dark,
      padding: "6px 12px",
      borderRadius: "50px",
      "&:hover": {
        color: palette.common.white,
        backgroundColor: palette.primary.main,
      },
    },

    buttonProgress: {
      color: palette.common.white,
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
    error: {
      fontWeight: "bold",
      paddingLeft: "16px",
      [breakpoints.down("sm")]: {
        paddingLeft: 0,
      },
    },
  })
