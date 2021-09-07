import { createStyles, Theme } from "@material-ui/core/styles"
import { SidebarTypes } from "./sidebar.model"

export const styles = ({ breakpoints, palette }: Theme) =>
  createStyles({
    sidebar: ({ open }: SidebarTypes) => ({
      maxWidth: open ? "140px" : "48px",
      width: "100%",
      paddingRight: "16px",
      transition: "all 195ms ease-in",
      [breakpoints.up("sm")]: {
        paddingRight: "24px",
      },
      [breakpoints.up("md")]: {
        paddingRight: "40px",
      },
    }),
    root: {
      color: palette.common.black,
      position: "relative",
      backgroundColor: palette.common.white,
      borderRadius: "50px",
      boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "min-content",
      margin: "20px 0",
      padding: "12px 14px",
      minHeight: "50px",
      minWidth: "50px",
      "& svg": {
        fill: palette.primary.dark,
        "&:hover": {
          fill: palette.primary.dark,
        },
      },
    },
    active: {
      color: palette.common.white,
      backgroundColor: palette.primary.main,
      "& svg": {
        fill: palette.common.white,
      },
      "&:hover": {
        backgroundColor: palette.primary.main,
        "& svg": {
          fill: palette.common.white,
        },
      },
    },
    icon: {
      minWidth: "30px",
    },
  })
