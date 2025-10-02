import React from 'react';
import Header from './components/Header';
import Technology from './components/Technology';
import Investment from './components/Investment';
import Business from './components/Business';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Technology />
        <Investment />
        {/* <Business /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;