"use client";
import React from "react";
import Header from "../components/HeaderComponent";
import styles from "./Userhome.module.scss";
import SingleBlog from "../components/SingleBlog";
import BlogUploadForm from "../components/BlogUploadForm";
import Card from "@/app/ui/Card";
import DUMMYDATA from "../UserDummyData";



function Userhome() {
  return (
    <div className={styles.container}>
      
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
