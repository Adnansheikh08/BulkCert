import React from 'react';
import Navbar from './Component/navbar';
import DropZone from './Component/DropZone';
import InputSelection from './Component/InputSelection';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'sonner';

function App() {
  const Home = () => (
    <>
      <DropZone />
      <InputSelection />
    </>
  );

  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;