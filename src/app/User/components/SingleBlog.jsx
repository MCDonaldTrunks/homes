import React from "react";
import Card from "../../ui/Card";
import styles from "./Header.module.scss";

function SingleBlog(props) {
  return (
    <>
      {props.dummydata.blogs.length === 0 ? (
        <p>no posts to show</p>
      ) : (
        props.dummydata.blogs.map((blog) => (
          <Card>
            <div className={styles.blogContainer}>
              <div className={styles.userField}>
               
                <img src={blog.thumb} className={styles.blogUserThumb}></img>
                <h5>{blog.author}</h5>
              </div>
              {blog.message !== '' && <p>{blog.message}</p>}
              <div className={styles.blogImage}>
                <img src={blog.images}></img>
              </div>
            </div>
          </Card>
        ))
      )}
    </>
  );
}

export default SingleBlog;