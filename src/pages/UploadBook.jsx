import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DarklightMode from './DarklightMode';

import 'bootstrap/dist/css/bootstrap.min.css';

const UploadBook = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:8800/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post('http://localhost:8800/upload', formData)
      .then((response) => {
        console.log('File uploaded successfully');
        fetchData();
      })
      .catch((error) => {
        console.error('Error uploading file: ', error);
      });
  };

  const handleFileDownload = (id, name) => {
    axios({
      url: `http://localhost:8800/download/${id}`,
      method: 'GET',
      responseType: 'blob',
    })
      .then((response) => {
        const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', name);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up the link element
      })
      .catch((error) => {
        console.error('Error downloading file: ', error);
      });
  };

  return (
    <div>
      <DarklightMode />
    <div className="container">
      <h2 className="mt-5 mb-4">Book Uploader</h2>
      <div className="row">
        <div className="col-sm-6">
          <input type="file" className="form-control custom-file-input" onChange={handleFileChange} />
        </div>
        <div className="col-sm-6 mt-3 mt-sm-0">
          <button className="btn btn-success btn-block shadow" onClick={handleFileUpload}>Upload</button>
        </div>
      </div>
      <div className="mt-4">
        <h3>Uploaded Books:</h3>
        <ul className="list-group">
          {data.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center shadow">
              {item.name}
              <button className="btn btn-success btn-sm shadow" onClick={() => handleFileDownload(item.id, item.name)}>Download</button>
            </li>
          ))}
          {data.length === 0 && (
            <li className="list-group-item text-center">No books uploaded yet</li>
          )}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default UploadBook;



// /////this is correct code if above will not run uncomment it.

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import 'bootstrap/dist/css/bootstrap.min.css';

// const BookUploader = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios.get('http://localhost:8800/data')
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data: ', error);
//       });
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleFileUpload = () => {
//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     axios.post('http://localhost:8800/upload', formData)
//       .then((response) => {
//         console.log('File uploaded successfully');
//         fetchData();
//       })
//       .catch((error) => {
//         console.error('Error uploading file: ', error);
//       });
//   };

//   const handleFileDownload = (id, name) => {
//     axios({
//       url: `http://localhost:8800/download/${id}`,
//       method: 'GET',
//       responseType: 'blob',
//     })
//       .then((response) => {
//         const url = window.URL.createObjectURL(new Blob([response.data]));
//         const link = document.createElement('a');
//         link.href = url;
//         link.setAttribute('download', name);
//         document.body.appendChild(link);
//         link.click();
//       })
//       .catch((error) => {
//         console.error('Error downloading file: ', error);
//       });
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-5 mb-4">Book Uploader</h2>
//       <div className="row">
//         <div className="col-sm-6">
//           <input type="file" className="form-control custom-file-input" onChange={handleFileChange} />
//         </div>
//         <div className="col-sm-6 mt-3 mt-sm-0">
//           <button className="btn btn-success btn-block shadow" onClick={handleFileUpload}>Upload</button>
//         </div>
//       </div>
//       <div className="mt-4">
//         <h3>Uploaded Books:</h3>
//         <ul className="list-group">
//           {data.map((item) => (
//             <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center shadow">
//               {item.name}
//               <button className="btn btn-success btn-sm shadow" onClick={() => handleFileDownload(item.id, item.name)}>Download</button>
//             </li>
//           ))}
//           {data.length === 0 && (
//             <li className="list-group-item text-center">No books uploaded yet</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BookUploader;
























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import 'bootstrap/dist/css/bootstrap.min.css';

// const BookUploader = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios.get('/data')
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data: ', error);
//       });
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleFileUpload = () => {
//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     axios.post('/upload', formData)
//       .then((response) => {
//         console.log('File uploaded successfully');
//         fetchData();
//       })
//       .catch((error) => {
//         console.error('Error uploading file: ', error);
//       });
//   };

//   const handleFileDownload = (id, name) => {
//     axios({
//       url: `/download/${id}`,
//       method: 'GET',
//       responseType: 'blob',
//     })
//       .then((response) => {
//         const url = window.URL.createObjectURL(new Blob([response.data]));
//         const link = document.createElement('a');
//         link.href = url;
//         link.setAttribute('download', name);
//         link.style.display = 'none';
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       })
//       .catch((error) => {
//         console.error('Error downloading file: ', error);
//       });
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-5 mb-4">Book Uploader</h2>
//       <div className="row">
//         <div className="col-sm-6">
//           <input type="file" className="form-control custom-file-input" onChange={handleFileChange} />
//         </div>
//         <div className="col-sm-6 mt-3 mt-sm-0">
//           <button className="btn btn-success btn-block shadow" onClick={handleFileUpload}>Upload</button>
//         </div>
//       </div>
//       <div className="mt-4">
//         <h3>Uploaded Books:</h3>
//         <ul className="list-group">
//           {data.map((item) => (
//             <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center shadow">
//               {item.name}
//               <button className="btn btn-success btn-sm shadow" onClick={() => handleFileDownload(item.id, item.name)}>Download</button>
//             </li>
//           ))}
//           {data.length === 0 && (
//             <li className="list-group-item text-center">No books uploaded yet</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BookUploader;
