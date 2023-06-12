import React, { children } from 'react'
import classes from './Loginfield.module.css'


function Loginfield(props) {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1>WELCOME!</h1>
      </div>
      <div className={classes.right}>
        <h1>Log In</h1>
        <form className={classes.form}>
          <label>Email</label>
          <input type='email'></input>
          <label>Password</label>
          <input type='password'></input>
          <button type='submit'>Log In</button>
          {props.children}
        </form>
      </div>
      
    </div>
  
  )
}

export default Loginfield
