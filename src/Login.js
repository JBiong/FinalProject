import React, { useState } from "react";
import { Button, Grid, TextField, Toolbar, Typography } from "@mui/material";
// import Signup from "./Signup";
import "./login.css";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (event) => {
    event.preventDefault();
    // TODO: Implement login logic here
  };

  const handleSignUpClick = () => {
    setShowLogin(false);
  };

  // const handleLoginClick = () => {
  //   setShowLogin(true);
  // };

  return (
    <div className="welcome-back-page">
      <div className="welcome-back-container">
        <div className="applogo">
          <Toolbar style={{width: '500px'}}>
          <img
            src="logo.png"
            alt="AcadZen Logo"
          />
          {/* <div> */}
          <Typography variant="h4" className='homeacadzen'>
            AcadZen
          </Typography>
          {/* </div> */}
          </Toolbar>
        </div>
        <div style={{ color: '#FFFFFF', marginLeft: '80px' }}>
        <h1 className="welcome-back-page__heading" style={{ fontSize: '50px', fontWeight: 'bold' }}>
          {showLogin ? 'Welcome back!' : 'Create an Account'}
        </h1>
        <p className="welcome-back-page__description" style={{ fontSize: '20px', width: '350px' }}>
          Elevating College Life for Holistic Success
        </p>
      </div>
      <div style={{marginLeft:'30px'}}>
        <img src="welimg.png" style={{width:'500px'}}/>
      </div>
      </div>
      <div className="login-form-container">
        <div className="login-container">
          {showLogin ? (
            <form onSubmit={handleLogin} className="login-form">
              <div style={{ marginBottom: '50px' }}>
                <h1>Log in</h1>
                <p>please fill your information below</p>
              </div>
              <TextField
                fullWidth
                label="Username"
                name="username"
                variant="standard"
                style={{ marginBottom: '20px', color:'#FAC712' }}
                required
                className="login-form__input"
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                variant="standard"
                style={{ marginBottom: '20px' }}
                required
                className="login-form__input"
              />
              <div className="button-container">
                <Grid container spacing={2} justifyContent='center'>
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      style={{ width: '150px', borderRadius: '10px', backgroundColor: '#FAC712', color: 'black', fontWeight: 'bold' }}
                    >
                      Log In
                    </Button>
                  </Grid>
                  <Grid item xs={5}>
                    <Button
                      fullWidth
                      variant="contained"
                      style={{ width: '150px', borderRadius: '10px', backgroundColor: '#FAC712', color: 'black', fontWeight: 'bold' }}
                      onClick={handleSignUpClick}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="login-form">
            <div style={{marginBottom: '50px'}}>
            <h1>Sign Up</h1>
            <p>please fill your information below</p>
            </div>
            <div style={{width: '400px'}}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="standard"
              style={{ marginBottom: '20px' }}
              required
              className="login-form__input"
            />
            <TextField
              fullWidth
              label="Username"
              name="username"
              variant="standard"
              style={{ marginBottom: '20px' }}
              required
              className="login-form__input"
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              variant="standard"
              style={{ marginBottom: '20px' }}
              required
              className="login-form__input"
            />
            </div>
            <div className="button-container">
            <Grid container spacing={0} justifyContent='center'>
              <Grid item xs={6}>
                <Button
                fullWidth
                type="submit"
                variant="contained"
                style={{ width: '250px', borderRadius: '10px', backgroundColor: '#FAC712', color: 'black', fontWeight: 'bold' }}
                >
                Create Account
                </Button>
              </Grid>
            </Grid>
            </div>
            
          </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
