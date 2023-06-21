import Image from 'next/image'
import styles from './page.module.css'
import Header from './rootComponents/Header'
import Login from './Login/page'

export default function Home() {

  const loged = true;

  return (

    

  <main className={styles.main}>
      {loged? <Login></Login>: <p>logged in</p>}
  </main>


  )
}
