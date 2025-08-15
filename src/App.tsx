import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import ProductShowcase from './components/ProductShowcase';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Support from './pages/Support';
import Privacy from './pages/Privacy';

// Home page component
const HomePage = () => (
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
