import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SavingsForm from './SavingsForm';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/savingsform" element={<SavingsForm />}></Route>
        {/* <Route path="/currentform" element={<CurrentForm />}></Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
