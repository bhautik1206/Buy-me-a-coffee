import React, { Suspense } from "react"
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loader from "#/components/Loader";

const App = () => {
  const location=useLocation();

  return (
    <Suspense fallback={Loader}>
      <Routes location={location}>

      </Routes>
    </Suspense>
  )
}

export default App