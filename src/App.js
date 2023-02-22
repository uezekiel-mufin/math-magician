import React from 'react';
import Calculator from './components/calculatorUi';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
  <Routes>
  
  <Route  path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='calculator' element={<Calculator />} />
    <Route path='quote' element={<Quote />} />

  </Route>
  </Routes>

  );
}

export default App;
