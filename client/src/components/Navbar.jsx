/* eslint-disable react/prop-types */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import {  NavLink } from "react-router-dom";

const Navbar = ({ navArrayLinks }) => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => setOpen(true)}
            sx={{ display: { sx: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navArrayLinks.map((item) => (
             
                <Button color="inherit" key={item.title} component={NavLink} to={item.path}>
                  {item.title}
                </Button>
         
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor=" right"
        onClose={() => setOpen(false)}
        sx={{ display: { sx: "flex", sm: "none" } }}
      >
        <NavListDrawer navArrayLinks={navArrayLinks} NavLink={NavLink}  setOpen={setOpen}/>
      </Drawer>
    </Box>
  );
};

export default Navbar;
