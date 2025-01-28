import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { BrowserRouter } from 'react-router-dom';

import AlbumPage from './components/AlbumPage/AlbumPage'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    <AlbumPage/>
    </BrowserRouter>
  );
}

export default App;
