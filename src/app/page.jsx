"use client"
import classes from './page.module.scss'
import Header from './landing_components/Header'
import Loginfield from './landing_components/Loginfield'
import Link from 'next/link';
import background from './landing_components/images/patternpad.png'




export default function Home() {
  return (
    <main className={classes.container} style={{
      backgroundImage: `url(${background.src})`,
      
    }}>

      <Header>
      </Header>
      
      <Loginfield className={classes.logInForm}>
        <p>or</p>
        <Link href={'/User/UserRegistration/'}>
          <div className={classes.registerLink}>register</div>
        </Link >
      </Loginfield>
      
    </main>
  )
}
