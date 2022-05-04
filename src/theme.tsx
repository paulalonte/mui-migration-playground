import { createTheme, adaptV4Theme } from "@mui/material/styles";

const theme = createTheme(
  adaptV4Theme({
    palette: {
      primary: {
        main: "#1fc22d",
        light: "lightblue",
      },
      secondary: {
        main: "#0000cc",
      },
    },
  })
);

export default theme;
