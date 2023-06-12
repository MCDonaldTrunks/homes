import React, { children } from 'react'
import classes from'./Header.module.css'
import Link from 'next/link'

function header(props) {
  return (
    <header className={classes.container}>
      {props.children}
      <Link href='/Explore'>to Explore</Link>
    </header>
  )
}

export default header
