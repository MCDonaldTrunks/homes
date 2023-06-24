import React from 'react'
import Header from './HeaderComponent'
import SidebarComponent from './SidebarComponent'
import styles from './SidebarHeaderTemplate.module.scss'
import DUMMYDATA from '../UserDummyData'
import { Children } from 'react'
import Footer from './Footer'

function SidebarHeaderTemplate(props) {
  return (
    <div className={styles.main}>
        <Header data={DUMMYDATA}></Header>
        <div className={styles.belowHeader}>
          
            <SidebarComponent data={DUMMYDATA}></SidebarComponent>
            <div className={styles.mainContent}>
              {props.children}
              <Footer></Footer>
            </div>
            
        </div>
    </div>
  )
}

export default SidebarHeaderTemplate