import { createStyles, Theme } from "@material-ui/core/styles"

export const styles = ({ palette }: Theme) =>
  createStyles({
    link: {
      color: palette.primary.main,
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      "& svg": {
        fill: palette.primary.dark,
        paddingLeft: "12px",
      },
    },
  })
