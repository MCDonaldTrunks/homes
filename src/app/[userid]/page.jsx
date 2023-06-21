
import React from 'react'
import Home from './userComponents/Userhome/page'




export default function page(props) {
   
    console.log(props)
    const query = props.params.userid
    console.log(query)
    
    return (
        <Home></Home>
    )
}

 