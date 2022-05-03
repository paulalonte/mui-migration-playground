import { ThemeProvider } from "@material-ui/core/styles";
import { ComponentType } from "react";

import theme from "./theme";

const withThemeProvider = (ComposedComponent: ComponentType) => {
  console.log(ComposedComponent);
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
