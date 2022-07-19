import { createTheme } from "@mui/material";
import "../assets/font/Montserrat-Regular.ttf";

export const dark_theme = createTheme({
     typography: {
          fontFamily: [
               "Montserrat",
               "-apple-system",
               "BlinkMacSystemFont",
               '"Segoe UI"',
               "Roboto",
               '"Helvetica Neue"',
               "Arial",
               "sans-serif",
               '"Apple Color Emoji"',
               '"Segoe UI Emoji"',
               '"Segoe UI Symbol"',
          ].join(","),
     },
     palette: {
          mode: "dark",
          primary: {
               main: "#000051",
          },
          secondary: {
               main: "#d32f2f",
          },
     },
});
