"use client";
import React from "react";
import Header from "../components/Header";
import styles from "./Userhome.module.scss";
import SingleBlog from "../components/SingleBlog";
import BlogUploadForm from "../components/BlogUploadForm";
import Card from "../../ui/Card";
import dynamic from "next/dynamic";
import DUMMYDATA from "../UserDummyData";
import SidebarComponent from "../components/SidebarComponent"



function Userhome() {
  return (
    <div className={styles.container}>
      <SidebarComponent data={DUMMYDATA}></SidebarComponent>
      <Header></Header>
      <div className={styles.mainContent}>
        <Card>
          <BlogUploadForm></BlogUploadForm>
        </Card>
        <SingleBlog dummydata={DUMMYDATA}></SingleBlog>
      </div>
    </div>
  );
}

export default Userhome;
