import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './login.css';
import Login from './Login';
import Signup from './Signup'; // Import the SignupView component

export default function HomePage() {
    const [user, setUser] = React.useState(null);
    const [showLogin, setShowLogin] = React.useState(false);
    const [hideAppBar, setHideAppBar] = React.useState(false);
    const [isSignInView, setIsSignInView] = React.useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
        setHideAppBar(true);
        setIsSignInView(true);
    };

    const handleSignInClick = () => {
        setShowLogin(true);
        setHideAppBar(true);
        setIsSignInView(false);
    };

    return (
        <div className='homebg'>
            {user ? (
                // User is logged in, render appropriate component
                <></>
            ) : (
                <Box sx={{ flexGrow: 1 }}>
                    {!hideAppBar && (
                        <AppBar position="static" style={{ backgroundColor: '#FFFFFF' }}>
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
                                <Typography variant="h4" className='homeacadzen' style={{fontWeight:'bold', fontSize:'45px'}}>
                                    AcadZen
                                </Typography>
                                <>
                                    <Button style={{ color: "#8C7111", fontWeight:'bold' }} onClick={handleLoginClick}>Sign up</Button>
                                    <Box sx={{ margin: '0 8px', color: '#8C7111' }}>|</Box>
                                    <Button style={{ color: "#8C7111", fontWeight:'bold' }} onClick={handleSignInClick}>Login</Button>
                                </>
                            </Toolbar>
                        </AppBar>
                    )}
                    {!hideAppBar && ( 
                    <div style={{marginLeft:'55%', marginTop:'10%'}}>
                        <div>
                        <Typography variant="h3" component="div" style={{fontWeight: 'bold', color:'#FFFFFF', width:'800px', fontSize:'75px'}}>
                           Elevating College Life for Holistic Success
                        </Typography>
                        </div>
                        <div style={{width:'450px', color:'#787360'}}>
                        <Typography variant="h6" component="div" style={{fontSize: '25px'}}>
                            Transforming Academic Journey with Integrated Flashcards, Dreamboard, and Mental Health Support 
                        </Typography>
                        </div>
                    </div>
                    )}
                </Box>
                
            )}
            
            {showLogin && (
                isSignInView ? (
                    // Render Sign Up view
                    <Signup handleToggle={() => setShowLogin(false)} />
                ) : (
                    // Render Login view
                    <Login isSignInView={isSignInView} setIsSignInView={setIsSignInView} />
                )
            )}
        </div>
    );
}
