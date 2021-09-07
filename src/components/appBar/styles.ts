import { createStyles, Theme } from "@material-ui/core/styles"

export const styles = ({ breakpoints, palette }: Theme) =>
  createStyles({
    root: {
      boxShadow: "unset",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      padding: "16px",
      [breakpoints.up("sm")]: {
        padding: "24px",
      },
      [breakpoints.up("md")]: {
        padding: "24px 40px",
      },
    },
    row: {
      display: "flex",
    },
    iconButton: {
      backgroundColor: palette.background.default,
      padding: "14px",
      marginRight: "20px",
      [breakpoints.up("sm")]: {
        marginRight: "40px",
      },
      "& svg": {
        fill: palette.primary.dark,
      },
      "&:hover": {
        backgroundColor: palette.primary.main,
        "& svg": {
          fill: palette.common.white,
        },
      },
    },
    button: {
      color: palette.primary.dark,
      backgroundColor: palette.background.default,
      padding: "6px 12px",
      borderRadius: "50px",
      "& svg": {
        fill: palette.primary.dark,
      },
      "&:hover": {
        color: palette.common.white,
        backgroundColor: palette.primary.main,
        "& svg": {
          fill: palette.common.white,
        },
      },
    },
  })
