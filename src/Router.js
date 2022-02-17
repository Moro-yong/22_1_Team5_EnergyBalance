import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import OverAndUnder from './pages/overandunder/OverAndUnder';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/over" element={<OverAndUnder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
