import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelNameUpload = () => {
  const [excelNames, setExcelNames] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0]; // Read first sheet
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(sheet); // Convert to JSON array

        // Assume column "Name" contains the names
        const names = rows.map((row) => row.Name);
        setExcelNames(names);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <h3 className='font-bold text-xl text-gray-500 font-Inter mb-2'>Excel File Upload</h3>
      <input
        type="file"
        accept=".xlsx"
        onChange={handleFileUpload}
        style={{ marginBottom: '10px'}}
      />
      
      <ul>
        {excelNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExcelNameUpload;
