import { createTheme } from "@mui/material";
import "../assets/font/Montserrat-Regular.ttf";

export const light_theme = createTheme({
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
          mode: "light",
          primary: {
               main: "#1976d2",
          },
          secondary: {
               main: "#d32f2f",
          },
     },
});
