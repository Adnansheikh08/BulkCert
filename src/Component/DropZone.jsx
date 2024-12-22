import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

const CertificateUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/png': ['.png'] },
    maxFiles: 1,
    onDrop: (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        toast.error('Invalid File. Please upload a PNG.');
        return;
      }
      const uploadedFile = acceptedFiles[0];
      setFile(uploadedFile);
      setPreview(URL.createObjectURL(uploadedFile));
    },
  });

  const handleDelete = () => {
    setFile(null);
    setPreview(null);
    toast.success('File removed successfully.');
  };

  const handleNext = () => {
    if (!file) {
      toast.error('Please upload a file to proceed.');
      return;
    }
    navigate('/input', { state: { templateImage: preview } });
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="upload-container flex flex-col items-center justify-center p-4">
      <p className="font-bold text-2xl text-blue-500 mb-3">Upload Your Certificate Template</p>
      <div
        {...getRootProps({
          className: `dropzone ${isDragActive ? 'bg-blue-100' : ''}`,
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
            className="rounded shadow-md mt-3"
            style={{ maxWidth: '100%' }}
          />
        ) : (
          <p>Drag & drop a PNG file here, or click to select one.</p>
        )}
      </div>
      <div className="mt-4 flex space-x-3">
        {preview && (
          <>
            <button onClick={handleNext} className="btn btn-success px-3 py-2">
              Next: Input Names
            </button>
            <button onClick={handleDelete} className="btn btn-danger px-4 py-2">
              Remove
            </button>
          </>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default CertificateUpload;
