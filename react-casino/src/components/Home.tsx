// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to our Casino!</h1>
      <div>
        <Link to="/roulette">Play Roulette</Link>
      </div>
      <div>
        <Link to="/blackjack">Play Blackjack</Link>
      </div>
      {/* Add more games as needed */}
    </div>
  );
};

export default Home;