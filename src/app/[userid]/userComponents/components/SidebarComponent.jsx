"use client"
import React, { useState } from "react";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import styles from "./SidebarComponent.module.scss";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




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
        {collapsed?<ArrowForwardIcon></ArrowForwardIcon>:<ArrowBackIcon></ArrowBackIcon>}
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

        {/*use classes from MenutItem on <li> tag and Link component.*/}
        <li className="ps-menuitem-root css-1t8x7v1">

          <a  className={styles.barLinks + ' ps-menu-button'} href={`${props.data.mainLink}/Chat`}>
            Messenger
          </a>

        </li>

        <MenuItem> Upload</MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SidebarComponent;
