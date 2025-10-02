
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Technology from './components/Technology';
import Investment from './components/Investment';
// import Business from './components/Business';
import Footer from './components/Footer';
import CaplinPoint from './components/CaplinPoint';
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
