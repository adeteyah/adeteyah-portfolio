import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/main.css';

import Home from './pages/HomePage';
import Work from './pages/WorkPage';
import OneColumn from './layouts/OneColumn';
import TwoColumn from './layouts/TwoColumn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TwoColumn />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<OneColumn />}>
          <Route path="/work/:slug" element={<Work />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
