import React from 'react'
import SidebarHeaderTemplate from '../[userid]/userComponents/components/SidebarHeaderTemplate'
import Userhome from '../[userid]/userComponents/Userhome/UserHomeComponent'

function page(props) {
  return (
    <SidebarHeaderTemplate>
        <Userhome></Userhome>
    </SidebarHeaderTemplate>
  )
}

export default page