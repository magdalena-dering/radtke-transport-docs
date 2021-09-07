import { createStyles, Theme } from "@material-ui/core/styles"

export const styles = ({ breakpoints, palette }: Theme) =>
  createStyles({
    root: {
      padding: "24px",
    },
    typography: {
      paddingBottom: "5rem",
      [breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    form: {
      display: "block",
      marginTop: "40px",
      textAlign: "center",
      [breakpoints.up("sm")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      // TODO: Check style for MuiFormControl
      "& > div": {
        width: "max-content",
        [breakpoints.up("sm")]: {
          minWidth: "30vw",
        },
      },
    },
    button: {
      color: palette.common.white,
      backgroundColor: palette.primary.main,
      padding: "6px 12px",
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
