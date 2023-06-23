import React from 'react'
import styles from './UserChat.module.scss'
import Header from '../components/HeaderComponent'
import DUMMYDATA from '../UserDummyData'

function UserChat() {
  return (
    <div className={styles.container}>
      <Header data={DUMMYDATA} ></Header>

      <div className={styles.chatContainer}>
        <div className={styles.left}>
          <h2>Contacts</h2>
          
        </div>
        <div className={styles.right}>
          <h2>Messages</h2>
          <div className={styles.messagesContainer}></div>

        </div>

      </div>

    </div>
  )
}

export default UserChat
