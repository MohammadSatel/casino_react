// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // import the CSS file

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to our Casino!</h1>
      <div>
        <Link to="/cashier"><img className="img-hover" src="/cashier.png" alt="Cashier" /></Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '50px' }}>
        <Link to="/roulette"><img className="img-hover" src="/roulette.png" alt="Roulette" /></Link>
        <Link to="/blackjack"><img className="img-hover" src="/blackjack.png" alt="Blackjack" /></Link>
        <Link to="/sports"><img className="img-hover" src="/sports.png" alt="Sports" /></Link>
        <Link to="/slot-machine"><img className="img-hover" src="/slot-machine.png" alt="Slot Machine" /></Link>
      </div>
    </div>
  );
};

export default Home;