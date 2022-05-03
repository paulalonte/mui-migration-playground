import { createTheme, adaptV4Theme } from "@mui/material/styles";

const theme = createTheme(
  adaptV4Theme({
    palette: {
      primary: {
        main: "#ff0000",
        light: "lightblue",
      },
      secondary: {
        main: "#0000cc",
      },
    },
  })
);

export default theme;
