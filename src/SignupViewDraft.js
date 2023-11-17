import React, { useState } from 'react';
import { Typography, Button, Grid, TextField, Link } from '@mui/material';
import './login.css';
import LoginDraft from './LoginDraft';

const SignupView = ({ setIsLoginView }) => {
    const [isLogin, setIsLogin] = useState(false);

    const handleSignup = (event) => {
        event.preventDefault();
        // Implement signup logic here
        console.log('Signing up...');
    };

    const handleToggle = () => {
        setIsLogin(!isLogin);
        // Update the isSignInView state in the parent component
        setIsLoginView(!isLogin);
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
                                Create Account
                            </Typography>
                            <Typography variant="subtitle2" align="left" style={{ marginLeft: '200px', fontStyle: 'italic', color: '#B1BA00' }}>
                                Sign up to get started
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align='center'>
                        {isLogin ? (
                                <LoginDraft handleToggle={handleToggle} />
                            ) : (
                                <form onSubmit={handleSignup}>
                                    {isLogin && (
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
                                    {isLogin && (
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
                                    {isLogin && (
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
                                    {isLogin && (
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
                                    {isLogin ? (
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
                                    ) : (
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
                                    )}
                                </form>
                            )}
                            {/* <form onSubmit={handleSignup}>
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
                                <Grid container spacing={2} justifyContent='center'>
                                    <Grid item xs={3}>
                                        <Button
                                            fullWidth
                                            type="submit"
                                            variant="contained"
                                            style={{ width: '200px', borderRadius: '20px', backgroundColor: '#FAC712', color: 'black' }}
                                        >
                                            Create Account
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form> */}
                        </Grid>
                        <Grid item xs={12} align='center'>
                            <Link onClick={handleToggle} style={{ cursor: 'pointer', color: 'black', fontStyle: 'italic', opacity: '50%' }}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default SignupView;
