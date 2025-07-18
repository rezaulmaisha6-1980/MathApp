
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFilePdf } from 'react-icons/fa';


function LeaveSample() {
  const [pdf, setPdf] = useState(null);
  const [files, setFiles] = useState([]);

  // Handle upload
  const handleUpload = async () => {
    if (!pdf) return alert("Please select a PDF");
    const formData = new FormData();
    formData.append('pdf', pdf);
    await axios.post('http://localhost:5000/upload', formData);
    setPdf(null);
    loadFiles(); // Refresh list
  };

  // Load uploaded files
  const loadFiles = async () => {
    const res = await axios.get('http://localhost:5000/files');
    setFiles(res.data);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  return (
    <div className="container mt-5">
      <h4 className="mb-4">📄 ছুটির আবেদন করবে তার নমুনা</h4>

      {/* <div className="mb-4 d-flex">
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setPdf(e.target.files[0])}
          className="form-control me-2"
        />
        <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
      </div> */}

      <ul className="list-group">
        {files.map((file, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <FaFilePdf color="red" className="me-2" />
              {file}
            </div>
            <a
              href={`http://localhost:5000/uploads/${file}`}
              download
              className="btn btn-outline-danger btn-sm"
            >
              ডাউনলোড
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeaveSample;
