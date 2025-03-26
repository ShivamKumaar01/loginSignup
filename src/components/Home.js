import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate=useNavigate();
  function logoutHandler(e){
    console.log(e);
    localStorage.removeItem("loginData");
    localStorage.removeItem("isLoggedin");
    navigate('/login')



  }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={logoutHandler}>Logout</Button>
      </Toolbar>
    </AppBar>
    <h2>welcome {localStorage.getItem("loginData")}</h2>
  </Box>
  )
}

export default Home
