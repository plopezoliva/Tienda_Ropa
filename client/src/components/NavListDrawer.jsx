/* eslint-disable react/prop-types */
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";


const NavListDrawer = ({ navArrayLinks, NavLink, setOpen }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav aria-label="main mailbox folders">
        <List>
          {navArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton to={item.path} component={NavLink} onClick={()=> setOpen(false)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
