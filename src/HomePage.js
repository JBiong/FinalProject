import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './login.css';
import Login from './Login';

export default function HomePage() {
    const [user, setUser] = React.useState(null);
    const [showLogin, setShowLogin] = React.useState(false);
    const [hideAppBar, setHideAppBar] = React.useState(false);
    const [isSignInView, setIsSignInView] = React.useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
        setHideAppBar(true);
        setIsSignInView(false); // Reset to default view when Login is clicked
    };

    const handleSignInClick = () => {
        setShowLogin(true);
        setHideAppBar(true);
        setIsSignInView(true);
    };

  return (
    <div className='homebg'>
    {user ? (
        // <Login/>
        <></>
    ): (
    <Box sx={{ flexGrow: 1 }}>
        {!hideAppBar && ( 
      <AppBar position="static" style={{backgroundColor: '#FFFFFF'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
                src="logo.png" // Replace with the actual image source
                alt="AcadZen Logo" // Add a suitable alt text
                style={{
                  width: '90px', // Adjust the width as needed
                }}
              />
          </IconButton>
          <Typography variant="h4" component="div" className='homeacadzen'>
            AcadZen
          </Typography>
           
          <>
          <Button style={{color:"#8C7111"}} onClick={handleSignInClick}>Sign in</Button>
          |
          <Button style={{color:"#8C7111"}} onClick={handleLoginClick}>Login</Button>
          </>
        </Toolbar>
      </AppBar>
      )}
    </Box>
    )}
    {showLogin && <Login isSignup={isSignInView}/>}
    </div>
  );
}
