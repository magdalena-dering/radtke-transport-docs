import { createStyles, Theme } from "@material-ui/core/styles"
import { SvgIconProps } from "./svg.model"

export const styles = ({ palette }: Theme) =>
  createStyles({
    svgIconContainer: ({ ...props }: SvgIconProps) => ({
      width: props.width ? props.width : "22px",
      height: props.height ? props.height : "22px",
      "& > svg": {
        width: props.width ? props.width : "22px",
        height: props.height ? props.height : "22px",
      },
    }),
    resourceNameStyle: {
      marginRight: "5px",
      marginLeft: "16px",
    },
  })
