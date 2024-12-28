import { createTheme } from "@mui/material/styles";

export const configureDesignSystem = createTheme({
  palette: {
    primary: {
      main: "#FCB818",
    },
    secondary: {
      main: "#593725",
    },
  },

  typography: {
    fontFamily: "DupletRounded, Arial, sans-serif",
    allVariants: {
      textTransform: "none",
      letterSpacing: ".2px",
      lineHeight: "32px",
      color: "#593725",
      fontSize: "18px",
    },
  },

  shape: { borderRadius: 8 },
  spacing: 8,
  components: {
    MuiTextField: { defaultProps: { size: "small" } },
    MuiAutocomplete: { defaultProps: { size: "small" } },
    MuiIconButton: { defaultProps: { size: "small" } },
    MuiCheckbox: {
      defaultProps: {
        size: "small",
        icon: <i className="fi fi-rr-square" />,
        checkedIcon: <i className="fi fi-sr-checkbox" />,
        indeterminateIcon: <i className="fi fi-sr-square-minus" />,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: "small",
        sx: { borderRadius: "2000px", padding: "4px 16px" },
      },
      styleOverrides: {
        colorInherit: {
          backgroundColor: "#F2F3F5",
          borderColor: "#E4E7EB",
          color: "#343E75",
          border: "1px solid #CFCFCF",
        },
        containedPrimary: { color: "#593725" },
      },
    },
  },
});
