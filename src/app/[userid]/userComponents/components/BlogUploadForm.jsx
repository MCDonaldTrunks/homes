
"use client"
import styles from './BlogUploadForm.scss';
import React, { useState } from 'react';


function BlogUploadForm() {
  
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the blog upload logic here
    // You can access the entered data: title, content, and image
    // e.g., send an API request to upload the blog to a server

    // Reset the form after submission
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <div>
      <h3>Upload New Blog</h3>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="content">What's in your mind?:</label>
        <textarea id="content" name="content" value={content} onChange={handleContentChange}></textarea>

        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />

        <input type="submit" value="Upload" />
      </form>
    </div>
  );
}

export default BlogUploadForm;
