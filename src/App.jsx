import React from 'react';
import Navbar from './Component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;