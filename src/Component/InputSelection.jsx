import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ManualNameInput from './ManualNameInput';
import ExcelNameUpload from './ExcelNameUpload';

const InputSelection = () => {
  const location = useLocation();
  const templateImage = location.state?.templateImage; // Get passed data from navigation
  const [inputMethod, setInputMethod] = useState('manual'); // Track input method
  const [names, setNames] = useState([]); // Store names from user input

  const handleNameSubmit = (collectedNames) => {
    setNames(collectedNames);
    console.log('Collected Names:', collectedNames);
  };

  return (
    <div className="container flex flex-col items-center justify-center p-4">
      {templateImage && (
        <div className="mb-4 text-center">
          <h2 className="font-bold text-xl">Uploaded Template</h2>
          <img
            src={templateImage}
            alt="Certificate Template"
            style={{ maxWidth: '100%', border: '1px solid #ccc' }}
          />
        </div>
      )}
      <h2 className="font-bold text-2xl text-blue-500 mb-3">Select Name Input Method</h2>
      <select
        value={inputMethod}
        onChange={(e) => setInputMethod(e.target.value)}
        style={{ border: '2px dashed #ccc', marginBottom: '20px', padding: '5px 15px' }}
      >
        <option value="manual">Manual Input</option>
        <option value="excel">Upload Excel</option>
        <option value="mongo">Fetch from Database</option>
      </select>
      {inputMethod === 'manual' && <ManualNameInput onSubmit={handleNameSubmit} />}
      {inputMethod === 'excel' && <ExcelNameUpload onSubmit={handleNameSubmit} />}
      {names.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold text-lg">Collected Names:</h3>
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputSelection;
