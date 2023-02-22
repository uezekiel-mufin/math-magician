import React from 'react';
import Calculator from './components/calculatorUi';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Quote from './components/Quote';
import About from './components/About';

function App() {
  return (
  <Routes>
  
  <Route  path="/" element={<Layout />}>
    <Route index element={<About />} />
    <Route path='calculator' element={<Calculator />} />
    <Route path='quote' element={<Quote />} />

  </Route>
  </Routes>

  );
}

export default App;
