import { useState } from 'react';
import './App.css';
import './components/Navbar.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import ProductsCard from './components/ProductsCard.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ProductsCard/>
      <Footer/>
    </div>
  );
}

export default App;
