// CertificateUpload.js
import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Navigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
const CertificateUpload = () => {
  const [file, setFile] = useState(null); // To store the uploaded file
  const [error, setError] = useState(''); // To store error message
  const [preview, setPreview] = useState(null);
  const handleDelete = () => {
    const userConfirmed = window.confirm("Are you sure you want to delete this item?");
    if (userConfirmed) {
      // Proceed with the action
      setFile(null);
      toast.success("Removed")
    } else {
      // User canceled the action
      console.log("Action canceled");
    }
  };
  // Dropzone config
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'], // Accept only PNG files
    },
    maxFiles: 1, // Allow only one file
    onDrop: (acceptedFiles, fileRejections) => {
      // If files are rejected
      if (fileRejections.length > 0) {
        toast.error("Invalid File")
        setFile(null);
        return;
      }

      // If files are accepted
      const uploadedFile = acceptedFiles[0];
      setFile(uploadedFile);
      setError('');
    },
  });

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      // Free up memory when the component unmounts or when the file changes
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(null); // Clear the preview if no file is selected
    }
  }, [file]);

  return (
    <div className="upload-container flex flex-col items-center justify-center p-4">
      <p className='font-bold text-2xl text-blue-500 font-Inter mb-3'>Upload your Certificate Template</p>
      <div
        {...getRootProps({
          className: 'dropzone',
        })}
        style={{
          border: '2px dashed #ccc',
          padding: '10vh',
          textAlign: 'center',
          cursor: 'pointer',
          width: '50%',
        }}
      >
        <input {...getInputProps()} />
        {file ? (
          <p className='font-Inter flex justify-center text-xl'>
            {preview && (
              <div style={{ marginTop: '20px' }}>
                <p>Preview:</p>
                <img
                  src={preview}
                  alt="Preview of uploaded file"
                  style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc' }}
                />
              </div>
            )}
          </p>
        ) : (
          <p className='font-bold text-2xl text-gray-500 font-Inter mb-2'>Drag & drop a PNG file here, or click to select one</p>
        )}
      </div>

      {/* Error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className=''>
        <button onClick={()=>{
          toast.success("Happy Happy Happy")
        }} className='border p-1 px-3 m-2 btn btn-success '>Submit</button>
        <button onClick={()=>handleDelete()}  className=' btn btn-danger border p-1 px-3 m-2'>Re-upload</button>
      </div>
    </div>
  );
};

export default CertificateUpload;