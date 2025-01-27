import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    </BrowserRouter>
  );
}

export default App;
