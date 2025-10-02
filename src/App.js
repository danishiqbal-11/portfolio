
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
import PersistentSystems from './components/investments/PersistentSystems';
import TorrentPower from './components/investments/TorrentPower';
import AurobindoPharma from './components/investments/AurobindoPharma';
import MuthootFinance from './components/investments/MuthootFinance';
import PiIndustries from './components/investments/PiIndustries';
import MotilalOswal from './components/investments/MotilalOswal';
import AshokaBuildcon from './components/investments/AshokaBuildcon';
import Blogs from './components/investments/Blogs';
import ContainerCorporation from './components/investments/ContainerCorporation';
import AdaniPorts from './components/investments/AdaniPorts';
import HindalcoIndustries from './components/investments/HindalcoIndustries';
import AdaniPower from './components/investments/AdaniPower';
import Cipla from './components/investments/Cipla';
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
            <Route path="/investment/persistent-systems" element={<PersistentSystems />} />
            <Route path="/investment/torrent-power" element={<TorrentPower />} />
            <Route path="/investment/aurobindo-pharma" element={<AurobindoPharma />} />
            <Route path="/investment/muthoot-finance" element={<MuthootFinance />} />
            <Route path="/investment/pi-industries" element={<PiIndustries />} />
            <Route path="/investment/motilal-oswal" element={<MotilalOswal />} />
            <Route path="/investment/ashoka-buildcon" element={<AshokaBuildcon />} />
            <Route path="/investment/blogs" element={<Blogs />} />
            <Route path="/investment/container-corporation" element={<ContainerCorporation />} />
            <Route path="/investment/adani-ports" element={<AdaniPorts />} />
            <Route path="/investment/hindalco-industries" element={<HindalcoIndustries />} />
            <Route path="/investment/adani-power" element={<AdaniPower />} />
            <Route path="/investment/cipla" element={<Cipla />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
