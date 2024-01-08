// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Roulette from './components/Roulette';
import Blackjack from './components/Blackjack';
import Home from './components/Home';
import Cashier from './components/Cashier';
import Sports from './components/Sports';
import SlotMachine from './components/SlotMachine';

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = 'url(/fancy-background.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.height = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/blackjack" element={<Blackjack />} />
        <Route path="/cashier" element={<Cashier />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/slot-machine" element={<SlotMachine />} />
      </Routes>
    </Router>
  );
}

export default App;