import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { BrowserRouter } from 'react-router-dom';

import Section from './components/Section/Section';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    <Section/>
    </BrowserRouter>
  );
}

export default App;
