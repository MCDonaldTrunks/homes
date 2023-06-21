import React from 'react';
import styles from './Login.module.scss';

const LoginLandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Sign In</h2>
        <form className={styles.form}>
          <input className={styles.input} type="email" placeholder="Email" />
          <input className={styles.input} type="password" placeholder="Password" />
          <button className={styles.button} type="submit">Sign In</button>
        </form>
        <p className={styles.forgotPassword}>Forgot password?</p>
      </div>
    </div>
  );
};

export default LoginLandingPage;
