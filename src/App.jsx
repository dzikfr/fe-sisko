import { useState } from 'react';
import './App.css';
import './components/Navbar.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
