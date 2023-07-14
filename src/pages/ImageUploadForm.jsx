// React.js Component

import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      await axios.post('http://localhost:8800/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Handle success or display a success message
    } catch (error) {
      // Handle error or display an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="image" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageUploadForm;
