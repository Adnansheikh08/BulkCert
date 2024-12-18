import React, { useState} from 'react';
import ManualNameInput from './ManualNameInput';
import ExcelNameUpload from './ExcelNameUpload';
const InputSelection = () => {
    const [inputMethod, setInputMethod] = useState('manual');
  
    return (
      <div className='container flex flex-col items-center justify-center p-4'>
        <h2 className='font-bold text-2xl text-blue-500 font-Inter mb-3'>Select Name Input Method</h2>
        <select
          value={inputMethod}
          onChange={(e) => setInputMethod(e.target.value)}
          style={{border: '2px dashed #ccc', marginBottom: '20px', padding: '5px 15px' }}
        >
          <option value="manual">Manual Input</option>
          <option value="excel">Upload Excel</option>
          <option value="mongo">Fetch from Database</option>
        </select>
  
        {inputMethod === 'manual' && <ManualNameInput />}
        {inputMethod === 'excel' && <ExcelNameUpload />}
        {/* {inputMethod === 'mongo' && <FetchMongoNames />} */}
      </div>
    );
  };
  export default InputSelection;