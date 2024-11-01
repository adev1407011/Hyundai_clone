import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Find from './find_car';
import About from './about';
import Contact from './contact';
import Home from './home';
import Book from './book';
import Changes from './changes'
import Update from './update'
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/find_a_car' element={<Find/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/book" element={<Book/>}/>
      <Route path="/del" element={<Changes/>}/>
      <Route path="/upd" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
