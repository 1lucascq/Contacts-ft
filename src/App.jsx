import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PhoneBook from './pages/PhoneBook';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PhoneBook />} />
    </Routes>
  );
}

export default App;
