import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import styles from './HomePage.module.css'; // Import the new CSS module

export default function HomePage() {
    const [user, setUser] = React.useState(null);
    const [showLogin, setShowLogin] = React.useState(false);
    const [hideAppBar, setHideAppBar] = React.useState(false);
    const [isSignInView, setIsSignInView] = React.useState(false);
    const [showHometoabout, setShowHometoabout] = React.useState(true); // Add this state


    const handleLoginClick = () => {
        setShowLogin(true);
        setHideAppBar(true);
        setIsSignInView(true);
        setShowHometoabout(false);
    };

    const handleSignInClick = () => {
        setShowLogin(true);
        setHideAppBar(true);
        setIsSignInView(false);
        setShowHometoabout(false);
    };

    return (
        <div className={styles.homebg}>
            {user ? (
                // User is logged in, render Dashboard
                <Dashboard />
            ) : (
                // User is not logged in, render Home Page
                <Box sx={{ flexGrow: 1 }}>
                    {!hideAppBar && (
                        <AppBar position="static" style={{backgroundColor:'#FFFFFF'}}>
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
                                <Typography variant="h4" className={styles.homeacadzen} style={{fontWeight:'bold', fontSize:'45px'}}>
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
                        <div className={styles.contentContainer}>
                            <div>
                                <Typography variant="h3" component="div"  style={{fontWeight: 'bold', color:'#FFFFFF', width:'800px', fontSize:'75px'}}>
                                    Elevating College Life for Holistic Success
                                </Typography>
                            </div>
                            <div style={{width:'475px', color:'#787360'}}>
                                <Typography variant="h6" component="div" style={{fontSize: '25px', fontWeight:'bold'}}>
                                    Transforming Academic Journey with Integrated Flashcards, Dreamboard, and Mental Health Support 
                                </Typography>
                            </div>
                        </div>
                    )}
                    {showHometoabout && (
                        <div style={{marginTop:'350px', textAlign:'center', marginLeft:'475px'}}>
                            <h1 style={{fontSize:'60px', width:'1100px'}}>Excel in your courses using our latest set of study resources.</h1>
                        <div className={styles.hometoabout}></div>
                            
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
