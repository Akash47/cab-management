import { Theme, responsiveFontSizes, createTheme } from "@mui/material/styles";
import shadows, { Shadows } from "@mui/material/styles/shadows";

export const LightThemeConfig = {
  typography: {
    fontFamily: '"Poppins", sans-serif',
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#223E80",
    },
    text: {
      secondary: "#8692A6",
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
  },
  shadows: shadows.map((v, index) =>
    index === 1 ? "0px 2px 20px rgba(0,0,0,0.15)" : v
  ) as Shadows,

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
  },
} as Theme;

export const LightTheme = responsiveFontSizes(createTheme(LightThemeConfig));
