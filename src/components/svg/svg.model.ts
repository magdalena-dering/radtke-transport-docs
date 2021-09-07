import { IconNames } from "../../types"

export interface SvgIconProps {
  name?: IconNames.dashboard | IconNames.products
  icon?: React.ReactNode
  width?: string
  height?: string
  isResourceName?: boolean
}
