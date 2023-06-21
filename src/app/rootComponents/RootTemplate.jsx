import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Children } from 'react'

function RootTemplate(props) {
    return (
        <div>
            <Header></Header>
            {props.Children}
            <Footer></Footer>
        </div>
    )
}

export default RootTemplate