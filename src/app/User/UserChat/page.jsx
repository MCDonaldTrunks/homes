import React from 'react'
import styles from './UserChat.module.scss'
import Header from '../components/Header'
import Card from '../../ui/Card'

function UserChat() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Card>
        <div className={styles.chatContainer}>
          <div className={styles.left}>
            <h2>Contacts</h2>
          </div>
          <div className={styles.right}>
            <h2>Messages</h2>
          </div>

        </div>
      </Card>
    </div>
  )
}

export default UserChat
