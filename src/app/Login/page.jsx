"use client"
import React from 'react';
import styles from './Login.module.scss';
import { useState } from 'react';



const LoginLandingPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();


    if (email === 'user@example.com' && password === 'password123') {
      // Authentication successful
      console.log('Authentication successful');
      // Perform further actions like setting the user's session or token
    } else {
      // Authentication failed
      console.log('Authentication failed');
      // Display appropriate error message to the user
    }

    // Perform authentication logic here (e.g., call an API endpoint)
    // You can use a state management library or a context provider to handle authentication state
    // For simplicity, this example just logs the email and password to the console
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Sign In</h2>
        <form className={styles.form} onSubmit={handleLogin}>
          <input className={styles.input} type="email" placeholder="Email" onChange={handleEmailChange} />
          <input className={styles.input} type="password" placeholder="Password" onChange={handlePasswordChange}/>
          <button className={styles.button} type="submit">Sign In</button>
        </form>
        <p className={styles.forgotPassword}>Forgot password?</p>
      </div>
    </div>
  );
};

export default LoginLandingPage;
