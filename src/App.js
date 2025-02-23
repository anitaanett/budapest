import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Adatok from './components/Adatok';
import UjAdat from './components/UjAdat';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adatok" element={<Adatok />} />
          <Route path="/ujadat" element={<UjAdat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
