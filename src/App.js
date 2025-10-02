
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Technology from './components/Technology';
import Investment from './components/Investment';
// import Business from './components/Business';
import Footer from './components/Footer';
import CaplinPoint from './components/CaplinPoint';
import DSA from './components/technology/DSA';
import LLD from './components/technology/LLD';
import HLD from './components/technology/HLD';
import ML from './components/technology/ai/ML';
import DL from './components/technology/ai/DL';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/caplin-point" element={<CaplinPoint />} />
            <Route path="/technology/dsa" element={<DSA />} />
            <Route path="/technology/lld" element={<LLD />} />
            <Route path="/technology/hld" element={<HLD />} />
            <Route path="/technology/ai/ml" element={<ML />} />
            <Route path="/technology/ai/dl" element={<DL />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
