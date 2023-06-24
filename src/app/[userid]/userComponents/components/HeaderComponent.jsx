import React, { Children } from "react";
import classes from "./HeaderComponent.module.scss";
import Image from './images/logo.png';

function Header(props) {
  

  return (

    
    <header className={classes.container}>
      
      <div className={classes.logoContainer}>
        <a href={`${props.data[0].mainLink}`}>
          <img src={Image.src}></img>
        </a>
      </div>
      {props.children}
    </header>
  );
}

export default Header;
