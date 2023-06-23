import React from 'react'
import Header from '../components/HeaderComponent'
import UserRegistrationForm from './UserRegistrationForm'
import styles from './UserRegistration.module.scss'

function page() {
  return (
    <div className={styles.container}>
        <Header></Header>
        <UserRegistrationForm ></UserRegistrationForm>
      
    </div>
  )
}

export default page
