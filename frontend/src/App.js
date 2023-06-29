/*FRONTEND    
    App desenvolvido por
                       Erasmo Cardoso
                                Objetivo acessar dados de APIS externas */ 

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MenuB from './parts/nav';
import BankStart from './parts/banks';
import HomeStart from './parts/home';
import DashB from './parts/banks';
import SiteBusca from './parts/site';
import BitcoinStart from './parts/bitcoin';
import DolarStart from './parts/dolar';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="item-0">
          <MenuB />
        </div>
        <div id="item-1">
          <Routes>
            <Route path="/" element={<HomeStart />} />
            <Route path="/bankdata" element={<BankStart />} />
            <Route path="/dash" element={<DashB />} />
            <Route path="/sitebusca" element={<SiteBusca />} />
            <Route path="/bitcoin" element={<BitcoinStart />} />
            <Route path="/dolar" element={<DolarStart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
