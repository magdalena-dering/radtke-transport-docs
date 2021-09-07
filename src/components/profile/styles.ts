import { createStyles, Theme } from "@material-ui/core/styles"

export const styles = ({ breakpoints, palette }: Theme) =>
  createStyles({
    root: {
      padding: "24px",
    },
    cell: {
      fontWeight: "bold",
    },
    linkContainer: {
      display: "inline-block",
      paddingTop: "40px",
      "& p": {
        padding: "6px 0",
      },
    },
    iconButton: {
      backgroundColor: palette.common.white,
      padding: "4px",
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
  })
