import React, { useState } from 'react';
import { Typography, Button, Grid, TextField, Link } from '@mui/material';
import SignupView from './SignupViewDraft.js'; // Import the new SignupView component
import './login.css';

const LoginDraft = ({ setIsSignInView }) => {
    const [isSignup, setIsSignup] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    const handlePassword = () => {
        setIsPassword(!isPassword);
    };

    const handleToggle = () => {
        setIsSignup(!isSignup);
        // Update the isSignInView state in the parent component
        setIsSignInView(!isSignup);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        // Implement login logic here
        console.log('Logging in...');
    };

    return (
        <div className='backg'>
            <div className='innerdiv'>
                <div className='ininnerdiv'>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                                <img
                                    src="logo.png" // Replace with the actual image source
                                    alt="AcadZen Logo" // Add a suitable alt text
                                    style={{
                                        width: '150px', // Adjust the width as needed
                                    }}
                                />
                                <Typography variant="h3" align="center" className='acadzen'>AcadZen</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" align="left" style={{ marginLeft: '200px', fontWeight: 'bold', color: '#AF9F63' }}>
                                {isSignup ? "Create Account" : "Welcome!"}
                            </Typography>
                            <Typography variant="subtitle2" align="left" style={{ marginLeft: '200px', fontStyle: 'italic', color: '#B1BA00' }}>
                                {isSignup ? "Sign up to get started" : "Login to Continue"}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align='center'>
                            {isSignup ? (
                                <SignupView handleToggle={handleToggle} />
                            ) : (
                                <form onSubmit={handleLogin}>
                                    {isSignup && (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                name="email"
                                                variant="standard"
                                                required
                                                style={{ marginBottom: '40px', width: '350px', color: '#AF9F63' }}
                                            />
                                        </Grid>
                                    )}
                                    {!isPassword && (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Username"
                                                name="username"
                                                type="text"
                                                variant="standard"
                                                required
                                                style={{ marginBottom: '40px', width: '350px', color: '#AF9F63' }}
                                            />
                                        </Grid>
                                    )}
                                    {!isPassword && (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Password"
                                                name="password"
                                                type="password"
                                                variant="standard"
                                                required
                                                style={{ marginBottom: '40px', width: '350px', color: '#AF9F63' }}
                                            />
                                        </Grid>
                                    )}
                                    {isSignup && (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Confirm Password"
                                                name="confirmPassword"
                                                type='password'
                                                variant="standard"
                                                required
                                                style={{ marginBottom: '40px', width: '350px', color: '#AF9F63' }}
                                            />
                                        </Grid>
                                    )}
                                    {isPassword && (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                name="email"
                                                variant="standard"
                                                required
                                                style={{ marginBottom: '40px', width: '350px', color: '#AF9F63' }}
                                            />
                                        </Grid>
                                    )}
                                    {isPassword && (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Code"
                                                name="code"
                                                type='number'
                                                variant="standard"
                                                required
                                                style={{ marginBottom: '40px', width: '350px', color: '#AF9F63' }}
                                            />
                                        </Grid>
                                    )}
                                    <Grid item xs={12} align='center' style={{ marginBottom: '20px' }}>
                                        {!isSignup && (
                                            <Link onClick={handlePassword} style={{ cursor: 'pointer', fontStyle: 'italic', color: 'black', opacity: '50%' }}>Forgot Password?</Link>
                                        )}
                                    </Grid>
                                    {isSignup ? (
                                        <Grid item xs={12}>
                                            <Button
                                                fullWidth
                                                type="submit"
                                                variant="contained"
                                                style={{ width: '200px', borderRadius: '20px', backgroundColor: '#FAC712', color: 'black' }}
                                            >
                                                Create Account
                                            </Button>
                                        </Grid>
                                    ) : (
                                        <Grid container spacing={2} justifyContent='center'>
                                            <Grid item xs={3}>
                                                <Button
                                                    fullWidth
                                                    type="submit"
                                                    variant="contained"
                                                    style={{ width: '150px', borderRadius: '20px', backgroundColor: '#FAC712', color: 'black' }}
                                                >
                                                    Log In
                                                </Button>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Button
                                                    fullWidth
                                                    variant="contained"
                                                    style={{ width: '150px', borderRadius: '20px', backgroundColor: '#FAC712', color: 'black' }}
                                                    onClick={handleToggle}
                                                >
                                                    Sign Up
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    )}
                                </form>
                            )}
                        </Grid>
                        <Grid item xs={12} align='center'>
                            <Link onClick={handleToggle} style={{ cursor: 'pointer', color: 'black', fontStyle: 'italic', opacity: '50%' }}>
                                {isSignup ? 'Already have an account? Sign in' : ""}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default LoginDraft;
