import './App.css';
import React  from "react"
import {  Route, Routes, useLocation } from 'react-router-dom';

const App = () => {
  const location=useLocation();

  return (
    <div>
      <Routes location={location}>
        <Route /> 
      </Routes>     
    </div>
  )
}

export default App