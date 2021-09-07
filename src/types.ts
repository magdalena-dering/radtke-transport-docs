import {
  ApplicationIcon,
  BoxIcon,
  DashboardIcon,
  EditIcon,
  FileSearchIcon,
  FinanceIcon,
  LogoIcon,
  MenuCloseIcon,
  MenuOpenIcon,
  NotificationIcon,
  ProductIcon,
  ProfileIcon,
  ResponsesIcon,
  ShareIcon,
  SignOutIcon,
  TrashIcon,
  SendIcon,
  PasswordIcon,
} from "./assets"

export enum IconNames {
  signOut = "signOut",
  profile = "profile",
  notification = "notification",
  menuOpen = "menuOpen",
  menuClose = "menuClose",
  dashboard = "dashboard",
  products = "products",
  applications = "applications",
  edit = "edit",
  share = "share",
  trash = "trash",
  fileSearch = "fileSearch",
  box = "box",
  responses = "responses",
  logo = "logo",
  finance = "finance",
  send = "send",
  password = "password",
}

class Icons {
  signOut = SignOutIcon
  profile = ProfileIcon
  notification = NotificationIcon
  menuClose = MenuCloseIcon
  menuOpen = MenuOpenIcon
  dashboard = DashboardIcon
  products = ProductIcon
  applications = ApplicationIcon
  responses = ResponsesIcon
  edit = EditIcon
  share = ShareIcon
  trash = TrashIcon
  fileSearch = FileSearchIcon
  box = BoxIcon
  logo = LogoIcon
  finance = FinanceIcon
  send = SendIcon
  password = PasswordIcon
}

export const icons = new Icons()
