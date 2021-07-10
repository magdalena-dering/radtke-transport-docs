import { createMuiTheme } from "@material-ui/core/styles";

const fontWeight = {
  regular: 400,
};

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Maven Pro", "sans-serif"].join(","),
    body1: {
      fontSize: 14,
      fontWeight: fontWeight.regular,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
  },
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      main: "rgb(244, 123, 50)",
      dark: "rgb(65, 65, 65)",
    },
    text: {
      primary: "#000000",
      secondary: "rgb(244, 123, 50)",
    },
    background: {
      default: "#F5F6F7",
    },
    error: {
      main: "#d32f2f",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: "#ffffff",
        textTransform: "none",
        borderRadius: "50px",
        boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: "50px",
        boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
      },
    },
    MuiTextField: {
      root: {
        padding: "0 16px",
        "& > *": {
          padding: "0 16px",
        },
      },
    },
    MuiFormHelperText: {
      root: {
        padding: 0,
      },
    },
    MuiTypography: {
      root: {
        textTransform: "capitalize",
      },
    },
  },
});

export default theme;
