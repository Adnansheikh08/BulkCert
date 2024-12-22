import React, { useState } from 'react';

const ManualNameInput = () => {
  const [manualNames, setManualNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const processManualInput = () => {
    const nameArray = inputValue
      .split(',')
      .map((name) => name.trim()) // Trim spaces
      .filter((name) => name); // Remove empty entries
    setManualNames(nameArray);
  };

  return (
    <div>
      <h3 className='font-bold text-xl text-gray-500 font-Inter mb-2'>Manual Name Input</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter names separated by commas"
        style={{ width: '300px', padding: '10px', marginBottom: '10px' }}
      />
      <button onClick={processManualInput} style={{ marginLeft: '10px', border:'2px solid #ccc',padding:'2px 10px' }}>
        Process Names
      </button>
      <ul>
        {manualNames.map((name, index) => (
       <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManualNameInput;
