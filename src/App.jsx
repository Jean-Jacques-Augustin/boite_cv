import React from "react";
import "./styles/global.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Experience from "./pages/experience";
import Formation from "./pages/formation";
import Contact from "./pages/contact";
import { Container } from "@mui/material";
import { Paper, Box, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { dark_theme } from "./themes/dark";
import { light_theme } from "./themes/light";
import { ThemeValue } from "./app/themeSlice";

export let theme;

function App() {
     const dark = useSelector(ThemeValue);
     theme = dark ? dark_theme : light_theme;
     return (
          <ThemeProvider theme={theme}>
               <Paper elevation={0} className="App">
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10 }}>
                         <Container>
                              <Routes>
                                   <Route index element={<Home />} />
                                   <Route
                                        path="/formation"
                                        element={<Formation />}
                                   />
                                   <Route
                                        path="/experience"
                                        element={<Experience />}
                                   />
                                   <Route
                                        path="/contact"
                                        element={<Contact />}
                                   />
                              </Routes>
                         </Container>
                    </Box>
               </Paper>
          </ThemeProvider>
     );
}

export default App;
