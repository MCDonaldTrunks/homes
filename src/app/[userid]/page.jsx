
import React from 'react'




export default function page(props) {
   
    console.log(props)
    const query = props.params.userid
    console.log(query)
    
    return (
        //<div>user</div>
       <div>user {props.params.userid}  </div>
    )
}

 