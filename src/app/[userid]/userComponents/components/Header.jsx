import React, { Children } from "react";
import classes from "./Header.module.scss";
import Image from './images/logo.png';

function header(props) {
  

  return (

    
    <header className={classes.container}>
      
      <div className={classes.logoContainer}>
        <a href={`${props.data.mainLink}`}>
          <img src={Image.src}></img>
        </a>
      </div>
      {props.children}
    </header>
  );
}

export default header;
