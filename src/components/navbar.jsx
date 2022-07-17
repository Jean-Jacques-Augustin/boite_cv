import React from "react";
import { AppBar, Toolbar, Container } from "@mui/material";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const links = [
     { name: "Accueil", path: "/" },
     { name: "Formation", path: "/formation" },
     { name: "Expériance", path: "/experience" },
     { name: "Contact", path: "/contact" },
];

export default function Navbar() {
     return (
          <AppBar>
               <Container>
                    <Toolbar className="appbar">
                         <Typography>LOGO</Typography>
                         <div>
                              {links.map((item, key) => (
                                   <NavLink
                                        className={"Navlinks"}
                                        to={item.path}
                                   >
                                        {item.name}
                                   </NavLink>
                              ))}
                         </div>
                    </Toolbar>
               </Container>
          </AppBar>
     );
}
