import { ThemeProvider } from "@mui/material/styles";
import { ComponentType } from "react";

import theme from "./theme";

const withThemeProvider = (ComposedComponent: ComponentType) => {
  const WithTheme = () => {
    return (
      <ThemeProvider theme={theme}>
        <ComposedComponent />
      </ThemeProvider>
    );
  };

  return WithTheme;
};

export default withThemeProvider;
