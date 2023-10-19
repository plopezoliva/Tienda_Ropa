
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Footer = () => {
	return (
		<footer>
		<Box sx={{  mt: 5}}>
      <AppBar position="static" sx={{ bgcolor: "#0E1428", width:"100%"}}>
        <Toolbar>
     
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
	</footer>
	)
};

export default Footer;
