import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginKeonrok from './pages/keonrok/Login/Login';
import MainKeonrok from './pages/keonrok/Main/Main';

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginCode />} />
          <Route path="/mainCode" element={<MainCode />} />
          <Route path="/loginKeonrok" element={<LoginKeonrok />} />
          <Route path="/mainKeonrok" element={<MainKeonrok />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;