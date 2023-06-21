
import classes from "./Header.module.scss";
//import Image from './images/logo.png';

function header(props) {
  return (
    <header className={classes.container}>
      
      <div className={classes.logoContainer}>
       
      </div>
      {props}
    </header>
  );
}

export default header;
