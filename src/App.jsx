import React from 'react';
import Navbar from './Component/navbar';
import DropZone from './Component/DropZone'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<DropZone />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;