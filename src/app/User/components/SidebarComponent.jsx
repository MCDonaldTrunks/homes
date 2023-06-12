
import React, { useState } from "react";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import styles from "./SidebarComponent.module.scss";

 


function SidebarComponent(props) {
  const [collapsed, setCollapsed] = useState(true);
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sidebar
      collapsedWidth={"100px"}
      collapsed={collapsed}
      className={styles.sidebarnow}
    >
      <div
        onClick={handleCollapsedChange}
        className={styles.closeButtonContainer}
      >
        <ArrowBackIcon></ArrowBackIcon>
      </div>
      <div className={styles.imageContainer}>
        <img src={props.data.profileImage} alt="" />
      </div>
      <h2 className={styles.sideBarUserName}>{props.data.name}</h2>

      <Menu>
        <SubMenu label="User">
          <MenuItem> Home </MenuItem>
          <MenuItem> Profile </MenuItem>
          <MenuItem> Settings </MenuItem>
        </SubMenu>
        
          <MenuItem>
            <a>
              <Link className={styles.barLinks} href="/User/UserChat">
                Messenger
              </Link>
            </a>
          </MenuItem>
        
        <MenuItem> Upload</MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SidebarComponent;
