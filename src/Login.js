import React, { useState } from "react";
import { Button, Grid, TextField, Toolbar, Typography } from "@mui/material";
import Dashboard from "./Dashboard";
import "./login.css";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(""); // State to store error messages
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAccountCreated, setIsAccountCreated] = useState(false); // New state to track account creation status

  const handleLogin = async (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    try {
      const response = await fetch("http://localhost:8080/api/acadzen/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Login successful
        setIsLoggedIn(true);
      } else {
        // Handle login error
        const data = await response.json();
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login");
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    console.log("Submitting:", { email, username, password });

    try {
      const response = await fetch("http://localhost:8080/api/acadzen/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      });

      if (response.ok) {
        // Signup successful, set isAccountCreated to true
        setIsAccountCreated(true);
        console.log("Signup successful");
      } else {
        // Handle signup error
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  // Render Login component if isAccountCreated is true
  if (isAccountCreated) {
    return <Login />;
  }

  const handleSignUpClick = () => {
    setShowLogin(false);
  };

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="welcome-back-page">
      <div className="welcome-back-container">
        <div className="applogo">
          <Toolbar style={{ width: '500px' }}>
            <img
              src="logo.png"
              alt="AcadZen Logo"
            />
            <Typography variant="h4" className='homeacadzen'>
              AcadZen
            </Typography>
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
        <div style={{ marginLeft: '30px' }}>
          <img src="welimg.png" style={{ width: '500px' }} alt="Welcome Image" />
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
              {error && (
              <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
                {error}
              </div>
            )}
            </form>
          ) : (
            <form onSubmit={handleSignup} className="login-form">
            <div style={{ marginBottom: "50px" }}>
              <h1>Sign Up</h1>
              <p>please fill your information below</p>
            </div>
            <div style={{ width: "400px" }}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                variant="standard"
                style={{ marginBottom: "20px" }}
                required
                className="login-form__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                label="Username"
                name="username"
                variant="standard"
                style={{ marginBottom: "20px" }}
                required
                className="login-form__input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                variant="standard"
                style={{ marginBottom: "20px" }}
                required
                className="login-form__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button-container">
              <Grid container spacing={0} justifyContent="center">
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    style={{
                      width: "250px",
                      borderRadius: "10px",
                      backgroundColor: "#FAC712",
                      color: "black",
                      fontWeight: "bold",
                    }}
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
