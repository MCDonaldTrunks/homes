import React from 'react'
import Header from './HeaderComponent'
import SidebarComponent from './SidebarComponent'
import styles from './SidebarHeaderTemplate.module.scss'
import DUMMYDATA from '../UserDummyData'
import { Children } from 'react'

function SidebarHeaderTemplate(props) {
  return (
    <div className={styles.main}>
        <Header data={DUMMYDATA}></Header>
        <div className={styles.belowHeader}>
            <SidebarComponent data={DUMMYDATA}></SidebarComponent>
            {props.children}
        </div>
    </div>
  )
}

export default SidebarHeaderTemplate