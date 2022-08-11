import React, { useState } from "react";
import {
     AppBar,
     Toolbar,
     Container,
     Box,
     IconButton,
     Drawer,
     ListItem,
     ListItemIcon,
     ListItemText,
     List,
     ListItemButton,
} from "@mui/material";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Hidden } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ContactsIcon from "@mui/icons-material/Contacts";
import SwitchTheme from "./swithchTheme";

export const links = [
     { name: "Accueil", path: "/", icon: <HomeIcon /> },
     { name: "Formation", path: "/formation", icon: <SchoolIcon /> },
     { name: "Expérience", path: "/experience", icon: <WorkIcon /> },
     { name: "Contact", path: "/contact", icon: <ContactsIcon /> },
];

const drawerWidth = 300;

const ListesLinks = () => {
     return (
          <Box sx={{ mt: 9 }}>
               <List>
                    {links.map((item, index) => (
                         <ListItem key={index} disablePadding>
                              <ListItemButton
                                   className="listLinks"
                                   component={Link}
                                   to={item.path}
                              >
                                   <ListItemIcon>{item.icon}</ListItemIcon>
                                   <ListItemText primary={item.name} />
                              </ListItemButton>
                         </ListItem>
                    ))}
               </List>

               <List>
                    <ListItem>
                         <ListItemIcon>
                              <SwitchTheme />
                         </ListItemIcon>
                         <ListItemText primary={"Theme de couleur"} />
                    </ListItem>
               </List>
          </Box>
     );
};

export default function Navbar() {
     const [open, setOpen] = useState(false);

     const handeClickOpenDrawer = () => {
          setOpen(!open);
     };

     return (
          <AppBar
               elevation={1}
               sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
               color={"inherit"}
          >
               <Container>
                    <Toolbar className="appbar">
                         <Typography>LOGO</Typography>
                         <div>
                              <Hidden mdDown>
                                   {links.map((item, key) => (
                                        <NavLink
                                             to={item.path}
                                             key={key}
                                             data-replace={item.name}
                                        >
                                             {item.name}
                                        </NavLink>
                                   ))}
                                   <SwitchTheme />
                              </Hidden>
                              <Hidden mdUp>
                                   <IconButton
                                        color="inherit"
                                        onClick={handeClickOpenDrawer}
                                   >
                                        {open ? <CloseIcon /> : <MenuIcon />}
                                   </IconButton>
                              </Hidden>
                         </div>
                         <Drawer
                              variant={"temporary"}
                              sx={{
                                   width: drawerWidth,
                                   flexShrink: 0,
                                   [`& .MuiDrawer-paper`]: {
                                        width: drawerWidth,
                                        boxSizing: "border-box",
                                        border: 0,
                                   },
                              }}
                              anchor={"left"}
                              open={open}
                         >
                              <ListesLinks />
                         </Drawer>
                    </Toolbar>
               </Container>
          </AppBar>
     );
}
