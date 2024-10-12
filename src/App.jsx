import { useState } from 'react';
import './App.css';
import './components/Navbar.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
