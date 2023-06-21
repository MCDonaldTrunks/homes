import React from "react";
import styles from "./UserRegistration.module.scss";
import Link from 'next/link'

function UserRegistrationForm() {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.formContainer}>
      <h2>Register</h2>
      <form >
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="repassword">Re-enter Password:</label>
        <input type="password" id="repassword" name="repassword" />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" />

        <label htmlFor="birthdate">Date of Birth:</label>
        <input type="date" id="birthdate" name="birthdate" />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input className={styles.submitButton} type="submit" value="Register" />
        <p>or</p>
        <Link className={styles.loginLink} href='/'>log in</Link>
      </form>
    </div>
  );
}

export default UserRegistrationForm;
