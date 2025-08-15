import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import ProductShowcase from './components/ProductShowcase';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <ProductShowcase />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
