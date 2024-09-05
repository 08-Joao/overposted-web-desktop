import React from 'react';
// import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Teste from './teste';
import App from './App';

function routes() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
      </BrowserRouter>
  )
}

export default routes
