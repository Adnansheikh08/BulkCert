import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

const CertificateUpload = () => {
  const [file, setFile] = useState(null); // Store uploaded file
  const [preview, setPreview] = useState(null); // Store file preview URL
  const navigate = useNavigate(); // Navigation hook
  
  // Dropzone configuration
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/png': ['.png'] }, // Accept PNG files only
    maxFiles: 1, // Allow single file
    onDrop: (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        toast.error('Invalid File. Please upload a PNG.');
        return;
      }

      const uploadedFile = acceptedFiles[0];
      setFile(uploadedFile);
      setPreview(URL.createObjectURL(uploadedFile)); // Generate preview URL
    },
  });
  const handleDelete = () => {
    const userConfirmed = window.confirm("Are you sure you want to delete this item?");
    if (userConfirmed) {
      // Proceed with the action
      setFile(null);
      setPreview(null);
      toast.success("Removed")
    } else {
      // User canceled the action
      console.log("Action canceled");
    }
  };
  // Navigate to InputSelection with preview
  const handleNext = () => {
    if (!file) {
      toast.error('Please upload a file to proceed.');
      return;
    }
    navigate('/input', { state: { templateImage: preview } }); // Pass data via `state`
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview); // Cleanup memory when component unmounts
    };
  }, [preview]);

  return (
    <div className="upload-container flex flex-col items-center justify-center p-4">
      <p className="font-bold text-2xl text-blue-500 mb-3">Upload Your Certificate Template</p>
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
        {preview ? (
          <img
            src={preview}
            alt="Uploaded Template Preview"
            style={{ maxWidth: '100%', height: 'auto', marginTop: '20px', border: '1px solid #ccc' }}
          />
        ) : (
          <p>Drag & drop a PNG file here, or click to select one.</p>
        )}
      </div>
      <div className="mt-4">
  {preview && (
    <>
      <button onClick={handleNext} className="btn btn-success px-3 py-2">
        Next: Input Names
      </button>
      <button onClick={() => handleDelete()} className="btn btn-danger px-4 py-2 ml-2">
        Re-upload
      </button>
    </>
  )}
</div>
      <Toaster />
    </div>
  );
};

export default CertificateUpload;
