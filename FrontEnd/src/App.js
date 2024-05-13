import './App.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './module/Navigation/Navigation';

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Routes location={location}>
        <Route element={<Navigation />} />
      </Routes>
    </div>
  );
};

export default App;
